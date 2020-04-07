import React from 'react';
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateProfile from './CreateProfile';
import WeaversList from './WeaversList';


export default class App extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = {
      weavers: [],
      projects: [],
      weaver_id: null
    };
  }

  setWeaverId = (weaver_id) => {
    this.setState({
      weaver_id
    }, () => {
      this.fetchProjectsByWeaverId()
    });
  };

  componentDidMount() {
    this.fetchWeavers();
    this.fetchProjectsByWeaverId();
  }

  fetchProjectsByWeaverId = () => {
    const { weaver_id } = this.state;
    const url = weaver_id ? `/weaver/${weaver_id}` : ``;
    fetch(`API CALL`)
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

  fetchWeavers = () => {
    fetch(`APICALL`)
      .then((weaversResponse) => {
        if (!weaversResponse.ok)
          return weaversResponse.json().then(e => Promise.reject(e));
        return weaversResponse.json();
      })
      .then((weavers) => {
        this.setState({
          weavers
        });
      })
      .catch(error => {
        console.error({ error });
      });
  }

  handleProjectDelete = (project) => {
    const projectId = project.id;
    fetch(`API CALL`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (res.ok) {
          this.fetchWeavers();
          this.fetchProjectsByWeaversId()
        }
      })
      .catch(error => {
        console.error({ error })
      })
  };


  handleWeaverDelete = (weaver) => {
    const weaver_id = weaver.id;
    console.log({ Weaver_id }, "deleted")
    fetch(`APICALL`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (res.ok) {
          this.fetchWeavers();
          this.fetchProjectsByWeaverId()
        }
      })
      .catch(error => {
        console.error({ error })
      })
  };

  addWeaver = newWeaver => {
    console.log(newWeaver);
    const { Weavers } = this.state;
    weavers.push(newWeaver);
    this.setState({
      weavers
    });
  };

  addProject = newProject => {
    console.log(newProject);
    const { projects } = this.state;
    projects.push(newProjects);
    this.setState({
      projects
    });
  };

  */
  render() {
    console.log(this.props)
    return (
      <>
        <Router>
          <Route path="/" exact component={LandingPage} />
          <Route path="/CreateProfile" exact component={CreateProfile} />
          <Route path="/WeaversList" render={(props) => <WeaversList weavers={this.props.weavers} {...props} />} />
        </Router>
      </>
    )
  }
}

