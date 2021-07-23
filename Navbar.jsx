import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (

      <React.Fragment>
        <Navbar>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            React Example
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/home" className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Feature">
                  Employee Data
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Home">
                  Contact Data
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Pricing" tabindex="-1">
                  Contact US
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default Navbar;
