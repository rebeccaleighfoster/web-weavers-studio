import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <>
        <div id="hamburgerNav">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="hamburgerLinks">
            <li>
              <Link to="/weaverslist"> Meet Weavers</Link>
            </li>
            <li>
              <Link to="/projects"> See Projects</Link>
            </li>
            <li>
              <Link to="/createprofile"> Create Profile </Link>
            </li>
            <li>
              <Link to="/addProject"> Add Project </Link>
            </li>
          </ul>
        </div>
        <nav id="sideNav">
          <ul>
            <div className="link">
              <li className="loom">
                <Link to="/">
                  <img
                    src={require("./loom.png")}
                    className="loom"
                    alt="loom"
                  ></img>
                </Link>
              </li>
              <div id="hamburgerLinks">
                <li>
                  <Link to="/weaverslist"> Meet Weavers</Link>
                </li>
                <li>
                  <Link to="/projects"> See Projects</Link>
                </li>
                <li>
                  <Link to="/createprofile"> Create Profile </Link>
                </li>
                <li>
                  <Link to="/addProject"> Add Project </Link>
                </li>
              </div>
            </div>
          </ul>
        </nav>
      </>
    );
  }
}
