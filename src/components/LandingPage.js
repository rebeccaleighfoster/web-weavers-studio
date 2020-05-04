import React from 'react';
import { Link } from "react-router-dom"
import Nav from "./Nav";
import myStyles from './stylesheets/myStyles.css'


export default class LandingPage extends React.Component {
    render() {
        return (
            <>
                <Nav />
                <section className="infoText" id='landingPage'>
                    <div >
                    <h1 className="biggerFont"> Web Weavers Studio </h1>
                    <h2> Connect with Handweavers </h2>
                    <h3 className="smallerFont"> A place where handweavers can connect with eachother, share ideas and projects! </h3>
                    </div>
                    <div>
                    <h1> Share your projects and learn from others </h1>
                    <h3 className="smallerFont"> Weavers have been teaching eachother and passing along knowledge for decades. Use this app to keep the tradition of sharing tips going </h3>
                    </div>
                    <div>
                    <h1> Keep track of your own projects </h1>
                    <h3 className="smallerFont"> Record all the details of your projects in one spot. Yarn and reed size, pictures, draft references, ends per inch and more </h3>
                    </div>
                   
                </section>
               
            </>
        )
    }
}