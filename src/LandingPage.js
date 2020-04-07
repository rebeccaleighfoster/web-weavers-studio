import React from 'react';
//import './LandingPage.css';

export default class LandingPage extends React.Component {
    render() {
        return (
            <>

                <h1>Connect with Handweavers</h1>
                <h3>A place where handweavers can connect with eachother and share ideas</h3>
                    <h3>quote about weaving</h3>
                <p><em>placeholder for picture of weaving</em></p>
                    <h3>share your projects and learn from others</h3>
                <p>Weavers have been teaching eachother and passing along knowledge for decades. Use this database to keep the tradition of teaching eachother going</p>
                    <h3>Keep track of your own projects</h3>
                <p>Record all the details of your projects in one spot. Yarn and reed size, pictures, draft references, ends per inch and more</p>
                    <h3>Start Connecting Now</h3>
                <form class='next'>
                    <button type='submit'>Sign Up</button>
                    <br></br>
                    <button type='submit'>Meet Other Weavers</button>
                </form>
             </>
         )
        }
}