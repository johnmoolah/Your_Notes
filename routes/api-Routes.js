const router = require("express").Router();
const path = require("path");


router.get("/", (req, res) => {
    res.json({ msg: "success"});
});
  




module.exports = router;