const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongo_url = 'mongodb+srv://team_user:20012544@cargallery.nej3x.mongodb.net/cars?retryWrites=true'
const port = 4000

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
mongoose.connect(mongo_url,{
    useNewUrlParser: true,
})

const db = mongoose.connection;
db.once('open',()=>{
    console.log('Connected to MongoDB....');
})

app.use(allowCrossDomain)
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    console.log("Hello, World!");
})

const CarRoute = require('./routes/Cars')
const BrandRoute = require('./routes/Brands')
app.use('/cars',CarRoute)
app.use('/brands',BrandRoute)
app.listen(port,console.log("Listening on port: ",port))