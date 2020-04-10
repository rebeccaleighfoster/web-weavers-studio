import React from 'react';
import Nav from './Nav';
import './projectList.css'

export default class ProjectsList extends React.Component {
    render() {
        console.log("from projects list:", this.props.projects)
        const displayprojectsList = this.props.projects.map(function (projects) { 
            return (
                <ul>
                    <li>Project Name: {projects.ProjectTitle}</li>
                    <li> Project Description: {projects.ProjectDescription} </li>
                    <li> Weave Structure: {projects.WeaveStructure}</li>
                    <li>Warp Material: {projects.WarpMaterial}</li>
                    <li> Weft Material: {projects.WeftMaterial}</li>
                    <li>Sett: {projects.Sett}</li>
                    <li> Size on the loom: {projects.SizeonLoom}</li>
                    <li> Size after finishing and shrinkage: {projects.Sizeoffloom}</li>
                </ul>
            );
        });
        return (
            <section className= "projectList">
            < Nav/>
            {displayprojectsList}
            </section>
        );
    }
}


//map over projects array to display project info in a list filter by selected weaver's id,
//like when a user clicked a folder in noteful to display notes