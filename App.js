import React from "react";
import ContactData from"./Router/Navbar";
import Home from "./Router/Home";
import Services from "./Router/Services";
import About from "./Router/About";
import {BrowserRouter as Router,Route,Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/Navbar" exact component={ContactData}/>
          <Route path="/Home" exact component={Home}/>     
          <Route path="/About" exact component={About}/>
          <Route path="/Services" exact component={Services}/>
        </Switch>
<ContactData/>
</Router>
          </div>
  );
}

export default App;
