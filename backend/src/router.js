const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");

// Routes GET 

router.get("/users", userControllers.browse);

module.exports = router;