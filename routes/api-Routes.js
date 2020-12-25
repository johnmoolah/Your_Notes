const router = require("express").Router();
const path = require("path");


router.get("/", (req, res) => {
    res.json({ msg: "success"});
});

router.post("/", (req, res) => {
    console.log(req.body);
    res.status(201).send('Post Test')
})
    
  




module.exports = router;