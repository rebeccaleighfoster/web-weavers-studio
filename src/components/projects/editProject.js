import React from 'react';
import Nav from '../Nav';


import AddProjectForm from "./Form"

class EditProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {},

        }
    }

    fetchProjectsByProjectId = () => {
        const { project_id } = this.props.match.params;
        fetch(`/projects/project/${project_id}`)
            .then((resp) => {
                if (!resp.ok)
                    return resp.json().then(e => Promise.reject(e));
                return resp.json();
            }).then(data => {
                this.setState({
                    project: data
                })
            })
            .catch(error => {
                console.error({ error });
            });
    }


    componentDidUpdate(prevProps) {
        if (this.props.match.params.project_id !== prevProps.match.params.project_id) {
            this.fetchProjectsByProjectId();
        }
    }
    componentDidMount() {
        this.fetchProjectsByProjectId();
    }
    render() {
        console.log(this.state.project)
        return (
            <>
                <Nav />
                <AddProjectForm project={this.state.project}/>
            </>
        )
    }

}






export default EditProject;