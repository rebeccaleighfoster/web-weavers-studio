import React from 'react';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateProfile from './components/weavers/CreateProfile';
import WeaversList from './components/weavers/WeaversList';
import ProjectsList from './components/projects/ProjectsList';
import AddProject from './components/projects/AddProject';
import EditProject from './components/projects/EditProject';
import AllProjects from './components/projects/AllProjects';
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
          <Route path="/WeaversList" exact component= {WeaversList} />
          <Route path="/ProjectsList/:weaver_id" exact component= {ProjectsList}/> 
          <Route path="/AddProject" exact component={AddProject} />
          <Route path="/Projects/edit/:project_id" exact component={EditProject} />
          <Route path="/Projects/" exact component={AllProjects} />
          <Route path='/Weavers/:weaver_id' exact component={OneWeaver} />
        </Router>

      </>
    )
  }
}

