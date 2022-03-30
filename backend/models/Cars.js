const mongoose = require('mongoose')

// convert Schema...

const CarSchema = new mongoose.Schema({
    brand:String,
    images: String,
    model:String,
    showroom: String,
    price: Number,
    type: String,
    engine: String,
    engineDetails: String,
    drivetrain: String,
    transmission: String,
    fuel: String,
    fuelSupplySystem: String,
    upholsteryMat: String,
    elecSeat: String,
    sound: String,
    absBreak: String,
    airBags: String,
    elecGlass: String,
    equipOut: String,
    equipIn: String,
    equipSec: String,
    equipLivable: String,
    note: String,
    advice: String,
    update: String
})

module.exports = mongoose.model('Car',CarSchema)