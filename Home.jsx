import React from "react";
import { Link,Router } from "react-router-dom";
class Home extends React.Component{
    render(){
        return(
            <div>
                <Router>
                <div id="list-example" className="list-group">
  <Link className="list-group-item list-group-item-action" to="#list-item-1">Item 1</Link>
  <Link className="list-group-item list-group-item-action" to="#list-item-2">Item2</Link>
  <Link className="list-group-item list-group-item-action" to="#list-item-3">Item 3</Link>
  <Link className="list-group-item list-group-item-action" to="#list-item-4">Item 4</Link>
</div>
<div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example">
  <h4 id="list-item-1">Item 1</h4>
  <p>...</p>
  <h4 id="list-item-2">Item 2</h4>
  <p>...</p>
  <h4 id="list-item-3">Item 3</h4>
  <p>...</p>
  <h4 id="list-item-4">Item 4</h4>
  <p>...</p>
</div>
</Router>
            </div>
        )
    }
}
export default Home;