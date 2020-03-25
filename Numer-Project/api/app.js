import NewtonRapson from '../test/src/Component/NewtonRapson';

const express = require('express');
const mongoose = require('mongoose');
const app = express();  
const bodyparser = require('body-parser')
app.use(bodyparser.json())
const cors = require("cors")
app.use(cors());

//routes
app.get('/',(req, res) => {

});

//Import Route
const newtonapi = require('./routes/newtonapi') //ตัวหน้าถูกเรียก
app.use('/newtonapi',newtonapi);

//ConnectDB
mongoose.connect('mongodb+srv://chitchadakarn:mymint692539@cluster0-jvxrk.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,userMongoClient:true}) 
console.log('HI connected DB')

app.listen(8000);