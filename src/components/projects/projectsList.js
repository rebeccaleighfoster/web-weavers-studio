import React from 'react';
import { Link } from "react-router-dom";
import Nav from '../Nav';




export default class ProjectsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      // noData: true,

    }
  }
  handleProjectDelete = (project_id) => {

    fetch(`/projects/${project_id}`, {
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
    fetch(`/projects/${weaver_id}`)
      .then((resp) => {
        if (!resp.ok)
          return resp.json().then(e => Promise.reject(e));
        return resp.json();
      })
      //   .then(resp=>{
      //     if (!resp.length) {
      //       this.setState({
      //         noData: true
      //       }) 
      //     }
      // })
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
  //   console.log("hi", this.state)
  //   if (this.state.noData) {
  //     return( 
  //     <p>No Data was returned!</p>
  //     );
  //   }}
  //  }
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
                <li> Size on the loom: {project.size_on_loom}</li>
                <li> Size after finishing and shrinkage: {project.size_off_loom}</li>
              </section>
              <button onClick={() => this.handleProjectDelete(project.id)}> Delete </button>
              <br></br>
              <button><Link to={`/Projects/edit/${project.id}`} >
                Edit Project
              </Link></button>
            </ul>
          </section>)}

      </>
    );
  }
}
