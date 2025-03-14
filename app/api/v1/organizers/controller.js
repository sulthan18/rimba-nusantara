const { StatusCodes } = require("http-status-codes");

const {
  createOrganizer,
  createUsers,
  getAllUsers,
} = require("../../../services/mongoose/users");

const createCMSOrganizer = async (req, res, next) => {
  try {
    const result = await createOrganizer(req);


const createOrganizer = require("../../../services/mongoose/users");

const create = async (req, res, next) => {
  try {
    const result = await createOrganizer(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getCMSUsers = async (req, res, next) => {
  try {
    const result = await getAllUsers(req);

    res.status(StatusCodes.OK).json({ data: result });
  } catch (err) {
    next(err);
  }
};

const createCMSUser = async (req, res, next) => {
  try {
    const result = await createUsers(req);

    res.status(StatusCodes.CREATED).json({ data: result });
  } catch (err) {
    next(err);
  }
};

module.exports = { createCMSOrganizer, getCMSUsers, createCMSUser };
