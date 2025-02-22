const express = require("express");
const create = require("./controller");
const router = express();

router.post("/organizers", create);

module.exports = router;
