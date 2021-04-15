import { Component } from "react";


export default class Product extends Component{
  constructor(props){
 
    super(props);
    this.addtocart = this.addtocart.bind(this)
    
  }

  addtocart(e){
    e.preventDefault();
    alert('Product added')


  }

 
  render(){
    var link = "/shoes/"
  return (
    <div>
        <div
          className="product"
           style={{ margin: 10, padding: 10, backgroundColor: "white" }}
         >
           <div className="product_image"></div>
           <h2 className="product_title">{this.props.data.name}</h2>
           <div className="product_desc">
              <p> {this.props.data.price}</p>
              <p style={{marginLeft:"auto"}}>{this.props.data.rating}</p>
              
           </div>
           <div className="cart_button"><a href={link+this.props.data._id} onClick={this.addtocart}>Add to Cart</a></div>
      
      </div>
       
        
     
      
      </div>
    
  );
      }
}
