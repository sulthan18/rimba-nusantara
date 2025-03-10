const express = require("express");
const {
  createCMSOrganizer,
  createCMSUser,
  getCMSUsers,
} = require("./controller");

const { createCMSOrganizer, createCMSUser } = require("./controller");
const router = express();

const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

router.post(
  "/organizers",
  authenticateUser,
  authorizeRoles("owner"),
  createCMSOrganizer
);
router.post(
  "/users",
  authenticateUser,
  authorizeRoles("organizer"),
  createCMSUser
);

router.get("/users", authenticateUser, authorizeRoles("owner"), getCMSUsers);

const create = require("./controller");
const router = express();

router.post("/organizers", create);

module.exports = router;
