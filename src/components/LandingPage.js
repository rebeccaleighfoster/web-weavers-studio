import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

export default class LandingPage extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <section className="infoText" id="landingPage">
          <div className="biggerFonts">
            <h1> Web Weavers Studio </h1>
            <h2> Connect with Handweavers </h2>
            <h3>
              A place where handweavers can connect with each other, share ideas
              and projects!
            </h3>
          </div>
          <div>
            <h1> Share your projects and learn from others </h1>
            <h3>
              Weavers have been teaching each other and passing along knowledge
              for decades. Use this app to keep the tradition of sharing tips
              going.
            </h3>
          </div>
          <div>
            <h1> Keep track of your own projects </h1>
            <h3>
              Record all the details of your projects in one spot. Yarn size and
              material, sett, picks per inch, draft references, and more!
            </h3>
            <li>
              <Link to="/weaverslist"> Meet Weavers</Link>
            </li>
            <li>
              <Link to="/projects"> See Projects</Link>
            </li>
          </div>
        </section>
      </>
    );
  }
}
