import { Component } from "react";

import { Row, Col } from "react-flexa";

import Product from "./Product";

export default class Products extends Component {
    constructor(props) {
      super(props);
      // Don't call this.setState() here!
      this.state = { test:'',counter: 0, isLoading :true, Products_data:{} };
      this.handleClick = this.handleClick.bind(this);
      console.log("product,= const,",this.state.test)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ test: nextProps.toggle });
        fetch(
            "http://localhost:3000/shoes"+nextProps.toggle
          ).then((data) => {
            return data.json()
            
          })
          .then((data)=>{
      
            this.setState({
              Products_data : data,
              isLoading :false,
              
            })
          
            
          })
          
      }
  
    handleClick = () => {};
  
    componentDidMount() {
      
      let url = location.search;
      console.log("url", url)
  
      fetch(
        "http://localhost:3000/shoes"+this.state.test
      ).then((data) => {
        return data.json()
        
      })
      .then((data)=>{
  
        this.setState({
          Products_data : data,
          isLoading :false,
          
        })
        
      })
    }
    render(){
      var {isLoading, Products_data} = this.state
    return (
      <div className="App">
        <Row style={{ justifyContent: "" }}>
        {isLoading ? ('Loading'):
              (Object.keys(Products_data).map((pro)=>{
                return (
                  <Col xs={12} sm={12} md={6} lg={3} alignself="auto">
                  <Product data={Products_data[pro]} />
                
                </Col>
  
                )
              }))
  
            
              }
        
         
        </Row>
  
        </div>
    );
    }
  }
  