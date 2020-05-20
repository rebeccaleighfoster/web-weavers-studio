import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <>
        <nav id="hamburgerNav">
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
          </ul>
        </nav>
      </>
    );
  }
}
