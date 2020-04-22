import React from 'react';
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateProfile from './CreateProfile';
import WeaversList from './WeaversList';
import ProjectsList from './projectsList';
import addProject from './addProject'


export default class App extends React.Component {
 

filterProjectsByWeaverId = projectsByWeaverId => {
    //map over projects and filter by weaver id, if id matches weaver that was clicked, display projects
    console.log("filterProjectsByWeaverId")
  }


  render() {
    console.log(this.props)
    
    return (
      <>
        <Router>
          <Route path="/" exact component={LandingPage} />
          <Route path="/CreateProfile" exact component={CreateProfile} />
          <Route path="/WeaversList" render={(props) => <WeaversList weavers={this.props.weavers} {...props} />} />
          <Route path="/ProjectsList" render={(props) => <ProjectsList projects={this.props.projects} {...props}/>} />
          <Route path="/AddProject" exact component={addProject}/>
        </Router>
      </>
    )
  }
}

