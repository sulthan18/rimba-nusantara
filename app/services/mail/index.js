const nodemailer = require("nodemailer");
const Mustache = require("mustache");
const { gmail, password } = require("../../config");
const fs = require("fs");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: gmail,
    pass: password,
  },
});

const otpMail = async (email, data) => {
  try {
    let template = fs.readFileSync("app/views/email/otp.html", "utf8");

    let message = {
      from: gmail,
      to: email,
      subject: "Otp for registration is: ",
      html: Mustache.render(template, {
        firstName: data.firstName,
        otp: data.otp,
      }),
    };

    return await transporter.sendMail(message);
  } catch (ex) {
    console.error("Error sending OTP email:", ex);
  }
};

module.exports = { otpMail };
