const router = require("express").Router();
const fs = require("fs")
const path = require("path");



router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"))
    console.log("Landing page")
});


router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/notes.html"))
    console.log("Got notes")

fs.writeFile("db.json", "utf8", (err, data) => {
    if (err) throw err;
    console.log("File written")
    });
});

router.post("/notes", (req, res) => {
    fs.readFile("db.json", (err, data) => {
        if (err) throw err;
        console.log("File read")
            });
});
    
module.exports = router;