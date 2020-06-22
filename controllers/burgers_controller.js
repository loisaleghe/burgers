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
    const newBurger = new Burger(req.body.burger_name);
    await newBurger.save();
    res.status(201).json(newBurger);
  } catch (err) {
    res.status(500).json(err);
  }
});

//To update burgers
router.patch("/api/burger/:id", async function (req, res) {
  try{
    const id = req.params.id;
    let burger = await Burger.findById(id)
    
    burger = Object.assign(burger, req.body)
    await burger.save()
    res.status(200).json(burger)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
});


// router.patch("/api/burger/devour/:id", async function (req, res){
//   try{
//   const id = req.params.id;
//   let burger = await Burger.findById(id)
//   burger = Object.assign(burger, {devoured: true})
//   await burger.save()
//   } catch (err) {
//     res.status(500).json(err)
//   }
// })

module.exports = router;
