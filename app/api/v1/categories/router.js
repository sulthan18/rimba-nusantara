const express = require("express");
const router = express();

router.get("/categories", (req, res) => {
  res.status(200).json({
    message: "Halaman Categories",
  });
});

module.exports = router;
