const express = require('express');
const mongoose = require('mongoose');

var app = express();
var multer = require('multer');
var upload = multer()
var cors = require('cors');


var test_tk  ="test_tk"
const bodyParser = require('body-parser');
const uri = "mongodb+srv://tharun:"+test_tk+"@cluster0.ccir5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
app.use(bodyParser.urlencoded({ 
    extended:true
}))
app.use(bodyParser.json())
app.use(upload.array())


mongoose.connect(uri, 
    {useNewUrlParser : true, useUnifiedTopology: true})
    .then(()=>{
        console.log('db connected')
    })
    .catch((error)=>{
        console.log(error)
    })



    
/** 
     
const ProductSchema = require('./Schema/Product');

const Product = new ProductSchema({
    name: "KSL12",
    price :2000,
    rating:5,
    color :['red'],
    description:'skssss',
    Category:"Sliders",
    stock: false,
    count:1000,



    
})
Product.save().then(()=>{
    console.log("saved")
})

*/




// Importing Routes
var Shoes = require('./Routes/Shoes');


app.use('/shoes',  Shoes)

app.get('/', (req,res)=>{
    res.send("homepage")

})






app.listen(3000,()=>{
    console.log("app listening on")
})