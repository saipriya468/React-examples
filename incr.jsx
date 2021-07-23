import React, { Component } from 'react';

export default class Count extends Component {
    constructor(props){
        super(props);
        this.state={
            count:1,
            Count:1
        }
    }
    incrHandler=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    decrHandler=()=>{
        this.setState({
            Count:this.state.Count-1
        })
    }
  
  render() {
    return (
        <>
      <div>
          <button onClick={this.incrHandler}>incriment{this.state.count}</button>
          </div>
          <div>
          <button onClick={this.decrHandler}>decriment{this.state.Count}</button>

      </div>
      </>
    );
  }
}


