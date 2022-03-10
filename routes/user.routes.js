const express = require("express");

const router = express.Router();

router.post("/register", (req, res) =>
  res.send("Este es el endpoint de registro")
);

module.exports = router;
