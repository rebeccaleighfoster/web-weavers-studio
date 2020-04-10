import React from 'react';
import { Link } from 'react-router-dom';
import Nav from "./Nav"
import './WeaversList.css'

export default class WeaversList extends React.Component {
    render() {
        //const filterProjectsByWeaverID = () => console.log('filterProjectsByWeaverID Ran');
        //add mapping over projects array of object, filter by weaver id
        const displayWeaversList = this.props.weavers.map(function (weavers) { 
            return (
                <ul>
                    <li>{weavers.firstName} {weavers.lastName}</li>
                    <li>Email: {weavers.email}</li>
                    <li>Experience Level: {weavers.experienceLevel}</li>
                    <li>Type of Loom: {weavers.loomType}</li>
                    <li>State Located:{weavers.State}</li>
                    <li>Bio: {weavers.bio}</li>
                    <li><Link to='./projectsList'>Completed Projects</Link> </li>
                </ul>
            );
        });

        return (
            <section className="weaversList">
                < Nav />
                {displayWeaversList}
            </section>
        )
    }
}
