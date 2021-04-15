
var express = require('express');

var router = express.Router()

//SHOES SCHEMA
const ProductSchema = require('../Schema/Product');


router.get('/', (req,res)=>{
var colors=[]
var type=[];

var query={}
var sort={};
var page=0;
var skip =0;

console.log(req.query)

if(req.query.type){ 
    if(typeof(req.query.type) == 'string')
     {
        type.push(req.query.type) ;
     }
   else{req.query.type.forEach((x)=>{type.push(x)} ) }
    query['Category'] = { $in : type} 
}
if(req.query.color){
    if(typeof(req.query.color) == 'string')
    {
       colors.push(req.query.color) ;
    }
  else{req.query.color.forEach((x)=>{colors.push(x)} ) }
    query['color'] = {$in : colors}
}

if(req.query.sort_rating){
    if(req.query.sort_rating == 1){
        sort['rating'] = 1
    }
    else{sort['rating'] = -1}

}
if(req.query.sort){
    
        if(((req.query.sort).toString() == '1')){
            sort['price'] = 1
        }
        if(((req.query.sort).toString() == '-1')){
            sort['price'] = -1
        }
        if(((req.query.sort).toString() == '2')){
            sort['rating'] = 1
        }
        if(((req.query.sort).toString() == '-2')){
            sort['rating'] = -1
        }
        
}
if(req.query.page){
     page = (req.query.page-1) * 12
}
    
    if(req.query){

        console.log(query, sort)
        ProductSchema.find(
            query
        )
        .sort(sort)
        .skip(page)
        .limit(12)
        .then((n)=>{
            res.status(200).send(n)
        })
        
    }
    
    else{
        ProductSchema.find({}).then((product)=>{
            res.status(200).send(product)
    })
    }
         
    
})
router.post('/', (req,res)=>{
    console.log("ss")
    
})



module.exports = router;