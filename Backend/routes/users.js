const express = require("express");
const { getdetails } = require("../controllers/users");
const router = express.Router();

router.get("/", getdetails);

module.exports = router;
