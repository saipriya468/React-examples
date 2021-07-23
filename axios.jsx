import React from "react";
import Axios from "axios";
class ExApi extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contacts:null,
        };
    }
    getData=()=>{
       
       let API_URL ="https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist"
 Axios.get(API_URL).then((response)=>{
     this.setState({contacts:response.data})
     console.log(response)
 }).catch(()=>{});
    };
render(){
    return(
        <div>
            <button onClick={this.getData}>AxiosData</button>
            <pre>{JSON.stringify(this.state.contacts)}</pre>
        </div>
    )
}
}
export default ExApi;
