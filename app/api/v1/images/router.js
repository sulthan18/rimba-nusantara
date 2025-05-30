const express = require("express");
const { create } = require("./controller");
const router = express();

const upload = require("../../../middlewares/multer");

router.post("/images", upload.single("avatar"), create);

module.exports = router;
