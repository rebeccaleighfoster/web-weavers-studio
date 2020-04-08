import React from 'react';
import { Link } from "react-router-dom"
import Nav from "./Nav";
import './LandingPage.css';

export default class LandingPage extends React.Component {
    render() {
        return (
            <>
            < Nav/>
                <section className="header">
                    <h1>Connect with Handweavers</h1>
                    <h3>A place where handweavers can connect with eachother and share ideas</h3>
                </section>
                <section className="quote">
                <h3>quote about weaving</h3>
                <p><em>placeholder for picture of weaving</em></p>
                </section>
                <section className="shareProjects">
                <h3>Share your projects and learn from others</h3>
                <p>Weavers have been teaching eachother and passing along knowledge for decades. Use this app to keep the tradition of teaching eachother going</p>
                </section>
                <section className="keepTrack">
                <h3>Keep track of your own projects</h3>
                <p>Record all the details of your projects in one spot. Yarn and reed size, pictures, draft references, ends per inch and more</p>
                </section>
                <h3>Start Connecting!</h3>
                <form className='next'>
                    <Link to='./CreateProfile'>
                        <button type='submit'>Sign Up</button>
                    </Link>
                    <br></br>
                    <Link to='./weaversList'>
                        <button type='submit'>Meet Other Weavers</button>
                    </Link>
                </form>
            </>
        )
    }
}