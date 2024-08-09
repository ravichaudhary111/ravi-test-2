const express = require("express");
const { studentData } = require('../utility/const');
const router = express.Router();

router.get("/", async (req, res) => {
    return res.render("home", { studentData });
});

router.get("/hello", async (req, res) => {
    return res.render("hello");
});


module.exports = router;