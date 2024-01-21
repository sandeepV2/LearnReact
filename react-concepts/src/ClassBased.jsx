import React, { Component } from 'react'

export default class CClassBased extends Component {
    state = {
        counter: 0
    }
    
    inc=()=>{
      let c = this.state.counter;
      c++;
      // It takes updater as function
      // this.setState((state, props) => {
      //   return { counter : c } 
      // }) 

      this.setState({counter: c })
    }


  render() {
    return (
      <div>
        <h1>Class based {this.state.counter}</h1>
        <button onClick={this.inc}>inc</button>
      </div>
    )
  }
}
