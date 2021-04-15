import NavBar from "./Navbar";
import "./styles.css";

function Cart_item(){
    return(
       

            <div className="cart_product_container">
                <div className="cart_item">
                    <div className="cart_item_logo">
                        
                            
                        </div>
                        <div className="cart_item_text">
                            <div className="cart_item_title">
                                KSL
                                </div>
                                <div className="cart_item_desc">
                                DESC
                                </div>
                        </div>
                   </div>
                </div>
               
        )
}

export default function Cart(){
    return(
        <div>
            <NavBar />
            <div class="cart">

                <div className="cart_price_container">
                    </div>


                <div className="cart_body">
                <div className="cart_title">
                    <div style={{fontSize:30}}> CART</div><div> logo</div>
                    </div>
                            <Cart_item />
                            <Cart_item />
                            <Cart_item />
                            <Cart_item />
                            <div className="cart_footer">
                                    HOME <span style={{marginLeft:20}}> SELECT DATE</span>
                                </div> 
                            </div>
                        
                </div>

            </div>
        )
}