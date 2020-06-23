import React, { Component } from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import { URL } from "../../config";

class Allprojects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  //get all projects
  fetchProjects = () => {
    fetch(`${URL}/projects`)
      .then((projectsResponse) => {
        if (!projectsResponse.ok)
          return projectsResponse.json().then((e) => Promise.reject(e));
        return projectsResponse.json();
      })
      .then((projects) => {
        this.setState({
          projects,
        });
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  componentDidMount() {
    this.fetchProjects();
  }

  render() {
    return (
      <section>
        <Nav />
        {this.state.projects.map((project) => (
          <ul className="infoText">
            <li> Project Name: {project.project_title}</li>
            <li> Project Description: {project.project_description} </li>
            <li> Weave Structure: {project.weave_structure}</li>
            <li> Warp Material: {project.warp_material}</li>
            <li> Weft Material: {project.weft_material}</li>
            <li> Sett: {project.sett}</li>
            <li> Size On The Loom: {project.size_on_loom}</li>
            <li>
              Size After Finishing and Shrinkage: {project.size_off_loom}
            </li>
            <li>
              <Link to={`/Weavers/${project.weaver_id}`}>Meet Weaver</Link>
            </li>
          </ul>
        ))}
      </section>
    );
  }
}

export default Allprojects;
