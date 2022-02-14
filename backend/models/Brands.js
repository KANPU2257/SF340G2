const mongoose = require('mongoose')

const BrandSchema = new mongoose.Schema({
    brand: String,
    logo: String
})

module.exports = mongoose.model('Brand',BrandSchema)