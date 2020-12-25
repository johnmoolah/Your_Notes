const router = require("express").Router();
const fs = require("fs")
const path = require("path");


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../clientRoutes/index.html"))
    console.log("Landing page")
});

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../clientRoutes/notes.html"))
    console.log("Got notes")
});

router.post("/", (req, res) => {
    console.log(req.body);
    res.status(201).send('Post Test')
});
    
module.exports = router;