import React, { Component } from 'react'

export class ClassBasedLifeCycle extends Component {

    constructor(){
        super()
        this.state={count:1 , color:"cyan" , fontsize:"28px" , padding:"16px 32px"}
        this.name = "Aditya"
        this.address="patna"
    }
    
    static getDerivedStateFromProps(props ,state){
       return {address:props.address}
    }
    
  render() {
    return (
      <div>
        <h1 style={{background:this.state.color , fontSize:this.state.fontsize , padding:this.state.padding}} >Class Based LifeCycle </h1>
        <h2>{this.state.count}</h2>
        <h2>{this.name}</h2>
        <h2>{this.props.address ? this.props.address: this.address}</h2>
      </div>
    )
  }
}

export default ClassBasedLifeCycle
