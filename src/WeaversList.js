import React from 'react';
import { Link } from 'react-router-dom';
import Nav from "./Nav"
import './WeaversList.css'

export default class WeaversList extends React.Component {
    render() {
        const displayWeaversList = this.props.weavers.map(function (weavers) {
            return (
                <ul>
                    <Link to='./projectsList'><li>{weavers.firstName} {weavers.lastName}</li></Link>
                    <li>{weavers.email}</li>
                    <li>{weavers.experienceLevel}</li>
                    <li>{weavers.loomType}</li>
                    <li>{weavers.State}</li>
                    <li>{weavers.bio}</li>
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
