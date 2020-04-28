import React from 'react';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateProfile from './components/weavers/CreateProfile';
import WeaversList from './components/weavers/WeaversList';
import ProjectsList from './components/projects/projectsList';
import addProject from './components/projects/addProject';



export default class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Route path="/" exact component={LandingPage} />
          <Route path="/CreateProfile" exact component={CreateProfile} />
          <Route path="/WeaversList" render={(props) => <WeaversList weavers={this.props.weavers} {...props} />} />
          <Route path="/ProjectsList/:weaver_id" render={(props) => <ProjectsList projects={this.props.projects} {...props} />} />
          <Route path="/AddProject" exact component={addProject} />
        </Router>
      </>
    )
  }
}

