import React from 'react';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateProfile from './components/weavers/CreateProfile';
import WeaversList from './components/weavers/WeaversList';
import ProjectsList from './components/projects/projectsList';
import addProject from './components/projects/addProject';
import EditProject from './components/projects/editProject';
import Allprojects from './components/projects/Allprojects';
import OneWeaver from './components/weavers/OneWeaver';





export default class App extends React.Component {

  fetchProjectsByWeaverId = () => {
    const { weaver_id } = this.state;
    const url = weaver_id ? `/weaver/${weaver_id}` : ``;
    fetch(`/projects${url}`)
      .then((resp) => {
        if (!resp.ok)
          return resp.json().then(e => Promise.reject(e));
        return resp.json();
      }).then(data => {
        this.setState({
          projects: data
        })
      })
      .catch(error => {
        console.error({ error });
      });
  }


  render() {
    return (
      <>
        <Router>
          <Route path="/" exact component={LandingPage} />
          <Route path="/CreateProfile" exact component={CreateProfile} />
          <Route path="/WeaversList" render={(props) => <WeaversList weavers={this.props.weavers} {...props} />} />
          <Route path="/ProjectsList/:weaver_id" render={(props) => <ProjectsList projects={this.props.projects} {...props} />} />
          <Route path="/AddProject" exact component={addProject} />
          <Route path="/Projects/edit/:project_id" exact component={EditProject} />
          <Route path="/Projects/" exact component={Allprojects} />
          <Route path='/Weavers/:weaver_id' exact component={OneWeaver} />
        </Router>

      </>
    )
  }
}

