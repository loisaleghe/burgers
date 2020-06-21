const express = require("express");
const Burger = require("../models/burger");

const router = express.Router();

/* HTML ROUTES */
router.get("/", async function (req, res) {
  const data = await Burger.allBurgers();
  res.render("index", { burgers: data });
});

/* API ROUTES */
// To get all burgers
router.get("/api/burgers", async function (req, res) {
  try {
    const burgers = await Burger.findAll();
    res.status(200).json({ data: burgers });
  } catch (err) {
    res.status(500).json(err);
  }
});

// To insert burgers
router.post("/api/burgers", async function (req, res) {
  try {
    const burger = new Burger(req.body);
    await burger.save();
    res.status(201).json(burger);
  } catch (err) {
    res.status(500).json(err);
  }
});

//To update burgers
router.patch("/api/burger/:id", async function (req, res) {
  const id = req.params.id;
  const burgerName = req.body.burger_name;
  const devoured = req.body.devoured;

  let newBurger = new Burger({
    burgerName: burgerName,
    isDevoured: devoured,
    id,
  });
  try {
    await newBurger.save();
    res.status(200).json(newBurger);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
