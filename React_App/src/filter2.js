

import "./styles.css";
import React, {Component} from 'react';
import qs from "qs"
var serialize = require('form-serialize');


export default class Filters2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            color:'',
            type:'',
            result:'',
            isLoading:true,
            data:{},
            color:{},
            type:[],
            isLoading2:true

        
        }
    
        let url = location.search;
      
        this.handleSubmit = this.handleSubmit.bind(this)
        this.click  =this.click.bind(this)
    }


    _handleclick=(e)=>{
        e.target.checked=true
        
    }
    componentDidMount(){
        let temp={}
        console.log(localStorage)
        
        
        for(let i in localStorage){
            
            temp[i] = localStorage[i]
             if(localStorage.length == temp.length){
                console.log(localStorage.length, temp.length)
                this.setState({
                data : temp,
                isLoading2: false
                })
                
            }
        }
        
        
        

        
    }
    check=(e)=>{
        

        
     

    }

    handleSubmit(event){
 
        
      }

    click(e){
        
        
        localStorage.setItem(e.target.value,e.target.checked)
        var temp = this.state.data;

        temp[e.target.value] = e.target.checked.toString();
        this.setState({
            data : temp
        })
        
        if(localStorage.getItem(e.target.value) == (this.state.data[e.target.value]).toString())

        {  
            return true
        }
        else
        {return false}
    }
    
    render(){

    return(

        <div>
            <div class="filter_title">
            Filters
            
            </div>
        {

            (this.state.isLoading2) ?<></> :
            <form onSubmit={e => this.handleSubmit(e)}>
                
                
            <br />
            <label for="cost" style={{fontSize:20}}>Cost <br /></label>
            <input onChange={e =>{this.click(e)}} type="checkbox" id="vehicle1" name="cost" value="Bike" checked={this.state.data['Sneakers'] == 'true'}/>
            <label for="vehicle1"> I have a bike</label><br /> 
            <input onChange={e =>{this.click(e)}} type="checkbox" id="vehicle2" name="cost" value="Car" checked={this.state.data['Sneakers'] == 'true'} />
            <label for="vehicle2"> I have a car</label><br />
            <input onChange={e =>{this.click(e)}} type="checkbox" id="vehicle3" name="cost" value="Boat" checked={this.state.data['Sneakers'] == 'true'} />
            <label for="vehicle3"> I have a boat</label><br /><br />
            
            
            <label for="cost"  style={{fontSize:20}} >Type <br /></label>
            <input onChange={e =>{this.click(e)}} type="checkbox" id="type1" name="type" value="Sneakers" checked={this.state.data['Sneakers'] == 'true'} />
            <label for="Sneaker"> Sneakers</label><br /> 
            <input onChange={e =>{this.click(e)}} type="checkbox" id="type2" name="type" value="Sliders" checked={this.state.data['Sliders'] == 'true'} />
            <label for="Sliders"> Sliders</label><br />
            <input onChange={e =>{this.click(e)}} type="checkbox" id="type3" name="type" value="Slippers" checked={this.state.data['Slippers'] == 'true'} />
            <label for="Slipper"> Slippers</label><br /><br />

            <label for="cost"  style={{fontSize:20}} >Type <br /></label>
            <input onChange={e =>{this.click(e)}} type="checkbox" id="color1" name="color" value="red" checked={this.state.data['red'] == 'true'} />
            <label for="red"> Red </label><br /> 
            <input onChange={e =>{this.click(e)}} type="checkbox" id="color2" name="color" value="green" checked={this.state.data['green'] == 'true'} />
            <label  for="green"> Green</label><br />
            <input onChange={e =>{this.click(e)}} type="checkbox" id="color3" name="color" value="blue" checked={this.state.data['blue'] == 'true'} />
            <label  for="blue"> Blue</label><br /><br />

            <button type="submit"  onClick={this.click}> Apply</button>
            </form> 
        }
            
           
           
            </div>

    )

    }
}