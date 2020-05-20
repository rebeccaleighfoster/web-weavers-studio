import React from 'react';
import { Link } from "react-router-dom";
import Nav from '../Nav';
import { URL } from "../../config";

export default class ProjectsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    }
  }
  handleProjectDelete = (project_id) => {
    fetch(`${URL}/projects/${project_id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (res.ok) {
          this.fetchProjectsByWeaverId()
        }
      })
      .catch(error => {
        console.error({ error })
      })
  };
  
  fetchProjectsByWeaverId = () => {
    const { weaver_id } = this.props.match.params;
    fetch(`${URL}/projects/${weaver_id}`)
      .then((resp) => {
        if (!resp.ok)
          return resp.json().then(e => Promise.reject(e));
        return resp.json();
      })
      .then(data => {
        this.setState({
          projects: data
        })
      })
      .catch(error => {
        console.error({ error });
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.weaver_id !== prevProps.match.params.weaver_id) {
      this.fetchProjectsByWeaverId();
    }
  }
  componentDidMount() {
    this.fetchProjectsByWeaverId();
  }
  render() {
    console.log(this.state.projects)
    if (Array.isArray(this.state.projects) && this.state.projects.length === 0) {
      return (
        <>
          <Nav />
          <div className='infoText'> <h2> That weaver has not recorded any projects yet.</h2>
            <button> <Link to='/weaversList'> Back to Weavers </Link> </button>
          </div>
        </>
      )
    }
    return (
      <>
        < Nav />
        {this.state.projects.map(project =>
          <section>
            <ul className='infoText'>
              <section className="smallerFont">
                <li> Project Name: {project.project_title}</li>
                <li> Project Description: {project.project_description} </li>
                <li> Weave Structure: {project.weave_structure}</li>
                <li> Warp Material: {project.warp_material}</li>
                <li> Weft Material: {project.weft_material}</li>
                <li> Sett: {project.sett}</li>
                <li> Size on the Loom: {project.size_on_loom}</li>
                <li> Size After Finishing and Shrinkage: {project.size_off_loom}</li>
              </section>
              <button onClick={() => this.handleProjectDelete(project.id)}> Delete </button>
              <br></br>
              <button><Link to={`/Projects/edit/${project.id}`} >
                Edit Project
              </Link></button>
              <button> <Link to='/weaversList'> Back to Weavers </Link> </button>
            </ul>
          </section>)}

      </>
    );
  }
}
