import React from "react";
class Greeting extends React.Component{
    constructor(props){
    super(props);
    this.state={
        Greet:false,
    }
}
    
    render(){
        //using if/else
    //     if(this.state.Greet){
    //         return(
    //             <p>True block</p>
    //         )
    //     }
    //     else{
    //         return(
    //             <p>falseblock</p>
    //     )
    //         }
    //     }
return(
    
this.state.Greet?<p>GoodMorning</p>:<p>GoodEvening</p>
)     
}
}

export default Greeting;