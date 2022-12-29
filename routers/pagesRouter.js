const express = require("express");
const fs = require("fs");
const router = express.Router();
const { PAGES_FILE_PATH, getDataFromFile } = require("../utils.js");

router.post("/", (req, res) => {
    const { pageName, componentsIds } = req.body;
    const pages = getDataFromFile(PAGES_FILE_PATH);
})

module.exports = router;