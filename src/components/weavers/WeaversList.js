import React from 'react';
import { Link } from 'react-router-dom';
import Nav from "../Nav"



export default class WeaversList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weavers: [],
        };
    }
    fetchWeavers = () => {
        fetch(`/weavers`)
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

     componentDidMount(){
      this.fetchWeavers();
    }

    render() {
        console.log(this.state)
        return (
            <section className="weaversList">
                < Nav />
                {this.state.weavers.map(weaver =>
                    <ul>
                        <li>{weaver.first_name} {weaver.last_name}</li>
                        <li>Email: {weaver.email}</li>
                        <li>Experience Level: {weaver.experience_level}</li>
                        <li>Type of Loom: {weaver.loom_type}</li>
                        <li>State Located:{weaver.state}</li>
                        <li>Bio: {weaver.bio}</li>
                        <li><Link to={`/projectsList/${weaver.id}`}>Completed Projects</Link> </li>
                    </ul>)
                }
            </section>
        )
    }
}
