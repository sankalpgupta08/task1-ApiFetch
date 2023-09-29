import Users from "./Components/userCard";
import "./App.css";
import './style.css'
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { users_data: [], loading: true, lonely: true };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
this.setState({lonely: false});
    document.getElementById("main").style.display = "inline-block";
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users_data: users.data, loading: false });
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <>
        <nav>
          <div className="nav ">
            <div className="row center">
                <h1 className="rainbow">Users</h1>
                <button className="rainbow" onClick={this.updateState}>Fetch</button>
            </div>
          </div>
        </nav>
        { this.state.lonely ? <h1 className="text2">It's a bit lonely here!</h1> : null }

       

        <div className="box2">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
      </>
    );
  }
}

export default App;
