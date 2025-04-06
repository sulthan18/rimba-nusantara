const express = require("express");
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");
const { index } = require("./controller");
const router = express();

router.get(
  "/orders",
  authenticateUser,
  authorizeRoles("organizer", "admin", "owner"),
  index
);

module.exports = router;
