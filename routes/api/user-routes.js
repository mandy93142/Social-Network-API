const router = require("express").Router();
const { User } = require("../../models");


router.get("/", async (req, res) => {
    try{
        const dbUserData = await User.find().select("-__v")
        res.status(200).json(dbUserData);
    } catch(err) {
        res.status(500).json(err)
    }
})


router.post("/", async (req, res) => {

    try{
        const dbUserData = await User.create(req.body);
        res.status(200).json(dbUserData);
    } catch(err) {
        res.status(500).json(err)
    }
    
    })



module.exports = router;
