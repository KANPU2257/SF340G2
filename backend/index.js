const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongo_url = 'mongodb+srv://team_user:20012544@cargallery.nej3x.mongodb.net/cars?retryWrites=true&w=cars'
const port = 4000

mongoose.connect(mongo_url,{
    useNewUrlParser: true,
})

const db = mongoose.connection;
db.once('open',()=>{
    console.log('Connected to MongoDB....');
})

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    console.log("Hello, World!");
})

const CarRoute = require('./routes/Cars')

app.use('/cars',CarRoute)

app.listen(port,console.log("Listening on port: ",port))