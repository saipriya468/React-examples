import React from 'react';
class BasicForm extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
         name:"",
      };
    };
    onchangehandler=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    onSubmitHandler=(event)=>{
            console.log(`${this.state.name}`);
            event.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmitHandler}>
                <input type="text" value={this.state.name} onChange={this.onchangehandler}/>
                <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}
export default BasicForm;