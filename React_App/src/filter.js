

import "./styles.css";
import React, {Component} from 'react';
import qs from "qs"
var serialize = require('form-serialize');


export default class Filters extends Component{
    constructor(props){
        super(props);
        this.state = {
            color:'',
            type:'',
            result:'',
            isLoading:true,
            data:{},
            color:[],
            type:[]

        
        }
        console.log(this.props)
        let url = location.search;
        console.log(location)
        this.state.data = qs.parse(url,{ ignoreQueryPrefix: true })
        this.handleSubmit = this.handleSubmit.bind(this)
        this.click  =this.click.bind(this)
    }


    _handleclick=(e)=>{
        e.target.checked=true
        
    }
    componentDidMount(){
        
    }
    check=(e,f)=>{

        
     

    }

    handleSubmit(event){
        alert('sss')
        event.preventDefault()
        event.preventDefault()
      }

    click(e){
        e.preventDefault();
        let formdata = {}
        var str = serialize(e.target.form)
        
        window.history.pushState({"url": "" + "targetUrl" + ""}, "targetTitle", "/shoe?"+str);
        var s = this.props.toggle()
    }
    
    render(){

    return(

        <div>
            <div class="filter_title">
            Filters
            
            </div>

            
           
            <form onSubmit={e => this.handleSubmit(e)}>
                
                
                <br />
                <label for="cost" style={{fontSize:20}}>Cost <br /></label>
                <input type="checkbox" id="vehicle1" name="cost" value="Bike" />
                <label for="vehicle1"> I have a bike</label><br /> 
                <input type="checkbox" id="vehicle2" name="cost" value="Car" />
                <label for="vehicle2"> I have a car</label><br />
                <input type="checkbox" id="vehicle3" name="cost" value="Boat" />
                <label for="vehicle3"> I have a boat</label><br /><br />
                
                
                <label for="cost"  style={{fontSize:20}} >Type <br /></label>
                <input type="checkbox" id="type1" name="type" value="Sneakers" />
                <label for="vehicle1"> Sneakers</label><br /> 
                <input type="checkbox" id="type2" name="type" value="Sliders" />
                <label for="vehicle2"> Sliders</label><br />
                <input type="checkbox" id="type3" name="type" value="Chappals" />
                <label for="vehicle3"> Chappals</label><br /><br />

                <label for="cost"  style={{fontSize:20}} >Type <br /></label>
                <input type="checkbox" id="type1" name="color" value="red" />
                <label for="vehicle1"> Red</label><br /> 
                <input type="checkbox" id="type2" name="color" value="green" />
                <label for="vehicle2"> Green</label><br />
                <input type="checkbox" id="type3" name="color" value="blue" />
                <label for="vehicle3"> Blue</label><br /><br />

                <button type="submit"  onClick={this.click}> Apply</button>
                </form> 
            </div>

    )

    }
}