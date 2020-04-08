import React from 'react';
import Nav from './Nav';
import './projectList.css'

export default class ProjectsList extends React.Component {
    render() {
        console.log("from projects list:", this.props.projects)
        // const displayProjectsList = this.props.projects.map(function (projects)  {
        //filter by id
        return (
            <section className= "projectList">
            < Nav/>
            <ul>
                <li>project title</li>
                <li> hi</li>
            </ul>
            </section>
        );
    }
}


//map over projects array to display project info in a list filter by selected weaver's id,
//like when a user clicked a folder in noteful to display notes