const express = require("express");
const router = express.Router();
const Brand = require('../models/Brands')


router.get("/",async (req,res) => {
    const c = await Brand.find({});
    res.json(c)
})

module.exports = router