const router = require("express").Router();
const Room = require("../models/Room.model");

const isLoggedIn = require("../middleware/isLoggedIn");


router.get("/", isLoggedIn, async (req, res, next) => {
    const rooms = await Room.find()
    res.render("room-list", rooms);
  });
  

router.get("/create", isLoggedIn, (req, res, next) => {
  res.render("create-room");
});

router.post("/create", isLoggedIn, (req, res, next) => {
    const {name, description, imageUrl} = req.body
    const owner = req.user
    const newRoom = await Room.create({name, description, imageUrl, owner})
    res.render("index", newRoom);
  });
  

module.exports = router;
