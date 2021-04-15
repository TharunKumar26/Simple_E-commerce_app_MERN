const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name :{
        type : String,
    
    },
    description:{
        type : String,
    
    },
    rating:{
        default : 0,
        type : Number
    },
    price :{
        type : Number,
        
    },
    color:{
        type : Array
    },
    Category:{
        type: String,
        
    },
    count:{
        type :Number,
        required: false
    },
    stock:{
        type :Boolean,
        default : true

    }

})

const ProductSchema = mongoose.model('ProducSchema', Product);

module.exports = ProductSchema;