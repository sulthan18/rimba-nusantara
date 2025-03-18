
const express = require("express");
const signinCms = require("./controller");
const router = express();

router.post("/auth/signin", signinCms);

module.exports = router;

const express = require('express');
const router = express();
const { signinCms } = require('./controller');

router.post('/auth/signin', signinCms);

module.exports = router;

