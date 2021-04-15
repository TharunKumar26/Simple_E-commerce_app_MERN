import React, { Component } from "react";
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";

export default class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 15
    };
  }
 
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    var params = new URLSearchParams(window.location.search)
    params.set("page",pageNumber)
    window.location.href = location.origin + location.pathname +"?"+params.toString()
  
    this.setState({activePage: pageNumber});
  }
 
  render() {
    return (
      <div>
        <Pagination
            
          activePage={this.state.activePage}
          itemsCountPerPage={3}
          totalItemsCount={9}
          pageRangeDisplayed={3}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}