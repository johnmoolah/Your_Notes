const router = require("express").Router();
const path = require("path");


router.get("/", (req, res) => {
    res.json({ msg: "success"});
});
  

// router.get("/")

//     fs.writeFile("./db.json", JSON.stringify(allNotes), (err) => {
//         if (err) return res.JSON({ msg: "problem adding"});
//         res.JSON ({ msg: "successfully added"});
//     });



module.exports = router;