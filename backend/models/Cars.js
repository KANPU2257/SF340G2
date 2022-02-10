const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({
    brand:String,
    images: String,
    model:String,
    price: Number
})

module.exports = mongoose.model('Car',CarSchema)