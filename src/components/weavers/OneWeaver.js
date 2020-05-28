import React, { Component } from "react";
import Nav from "../Nav";
import { URL } from "../../config";

class OneWeaver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weaver: "",
    };
  }

  fetchOneWeaverByID = () => {
    const { weaver_id } = this.props.match.params;
    fetch(`${URL}/weavers/weaver/${weaver_id}`)
      .then((resp) => {
        if (!resp.ok) return resp.json().then((e) => Promise.reject(e));
        return resp.json();
      })
      .then((data) => {
        this.setState({
          weaver: data,
        });
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  componentDidMount() {
    this.fetchOneWeaverByID();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.weaver_id !== prevProps.match.params.weaver_id
    ) {
      this.fetchOneWeaverByID();
    }
  }

  handleClick = () => {
    this.props.history.push(`/projectsList/${this.state.weaver.id}`);
  };

  render() {
    console.log(this.state)
    return (
      <section>
        <Nav />
        <ul className="infoText">
          <li className="biggerFont">
            {this.state.weaver.first_name} {this.state.weaver.last_name}
          </li>
          <section className="smallerFont">
            <li>Email: {this.state.weaver.email}</li>
            <li>Experience Level: {this.state.weaver.experience_level}</li>
            <li>Type of Loom: {this.state.weaver.loom_type}</li>
            <li>State Located: {this.state.weaver.state}</li>
            <li>Bio: {this.state.weaver.bio} </li>
            <button onClick={this.handleClick}>
              {" "}
              See all projects by this weaver
            </button>
          </section>
        </ul>
        )
      </section>
    );
  }
}

export default OneWeaver;
