import React from "react";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateProfile from "./components/weavers/CreateProfile";
import WeaversList from "./components/weavers/WeaversList";
import ProjectsByWeaver from "./components/projects/ProjectsByWeaver";
import AddNewProject from "./components/projects/AddNewProject";
import EditExistingProject from "./components/projects/EditExistingProject";
import ListAllProjects from "./components/projects/ListAllProjects";
import OneWeaver from "./components/weavers/OneWeaver";

const App = () => (
  <>
    <Router>
      <Route path="/" exact component={LandingPage} />
      <Route path="/CreateProfile" exact component={CreateProfile} />
      <Route path="/WeaversList" exact component={WeaversList} />
      <Route
        path="/ProjectsList/:weaver_id"
        exact
        component={ProjectsByWeaver}
      />
      <Route path="/AddProject" exact component={AddNewProject} />
      <Route path="/Projects/edit/:project_id" exact component={EditExistingProject} />
      <Route path="/Projects/" exact component={ListAllProjects} />
      <Route path="/Weavers/:weaver_id" exact component={OneWeaver} />
    </Router>
  </>
);

export default App;
