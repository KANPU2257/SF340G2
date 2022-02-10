
const express = require('express');
const Car = require('../models/Cars')
const router = express.Router()

router.get('/',(req,res) =>{
    console.log('Get all routes');
});

router.get('/get/:id',async (req,res) => {
    // const q = await Cars.findById(req.params.id)
    const c = await Car.findById(req.params.id)
    res.json(c)
})


router.get('/brand/:brand',async (req,res) => {
    // const q = await Cars.findById(req.params.id)
    const c = await Car.find({brand:req.params.brand})
    res.json(c)
})

module.exports = router