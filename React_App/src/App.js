import "./styles.css";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
var serialize = require('form-serialize');



import { Row, Col } from "react-flexa";

import Product from "./Product";
import { Component } from "react";
import { render } from "react-dom";


import qs from "qs"
import Filters from "./filter";
import NavBar from "./Navbar";
import { ThemeConsumer } from "styled-components";
import Products from "./Products";
import Cart from "./Cart";
import Products2 from "./Products_2";
import Filters2 from "./filter2";
import Pages from "./pagination";



class Home extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { test:'',counter: 0, isLoading :true, Products_data:{} };
    this.handleClick = this.handleClick.bind(this);
    
  }

  handleClick = () => {
    this.setState({
      test: location.search
    })
    
    
    

  };

  
  render() {
    var {isLoading,test, Products_data} = this.state
  
    return (
      <div className="App">

        <NavBar />
        <div className="body">
          <div className="Filter_container">
            <div className="filter">
             
             
                <Filters toggle={this.handleClick} />
                
              
            </div>
          </div>

          <div className="Products_container">
            <div className="product_header">
            <h3 style={{ marginLeft: 20 }}> {console.log(this.state.test)} SHOES</h3>
            <div style={{marginLeft:'auto'}}>ss</div>
           
              </div>
              <Products toggle={test} />
            
          </div>
        </div>
          </div>
    );
  }
}




class Home2 extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { test:'',counter: 0, isLoading :true, Products_data:{} };
    this.handleClick = this.handleClick.bind(this);
    
  }

  handleClick = (e) => {
    e.preventDefault()
     var data = serialize(e.target.form)
    var params =new URLSearchParams(location.search)
    params.set('sort',e.target.value)
    window.location.href = location.origin + location.pathname + "?"+params.toString()
    window.pushState(null,null,"?"+params.toString())
    
  console.log(e)

  
    
    
    

  };

  
  render() {
    var {isLoading,test, Products_data} = this.state
  
    return (
      <div className="App">

        <NavBar />
        <div className="body">
          <div className="Filter_container">
            <div className="filter">
             
             
                <Filters2 toggle={this.handleClick} />
                
              
            </div>
          </div>

          <div className="Products_container">
            <div className="product_header">
            <h3 style={{ marginLeft: 20 }}> {console.log(this.state.test)} SHOES</h3>
            <div style={{marginLeft:'auto'}}>
              <form>
                
               
                    <label for="cars">Sort By</label>
                    <select  onChange={this.handleClick} name="sort" id="cars">
                      <option value={0}>Sort By</option>
                      <option  value={1}>Price low to high</option>
                      <option value={-1}>Price high to low</option>
                      <option value={2}>rating high to low</option>
                      <option value={-2}>rating high to low</option>
                    </select>
                    <br /><br />
                    <input type="submit" onClick={this.handleClick} value=""  hidden/>

                      
                </form>
            </div>
           
              </div>
              
              <Products2 />
              <Pages />
          </div>
        </div>
          </div>
    );
  }
}



export default function App(){
  return(
    <Router>
    <Route path="/shoe"  component={Home} />
    <Route path="/cart"  component={Cart} />
    <Route path="/shoe2" component={Home2} />
      
      </Router>
    
  )

}