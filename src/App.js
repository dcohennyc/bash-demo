import React, { Component } from "react";
import "./App.css";
import VideoContainer from "./components/VideoContainer/VideoContainer";
import Room from "./components/Room/Room";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      rooms: [],
    };
  }

  componentDidMount() {
    this.stateChange();
  }

  handler = () => {
    this.stateChange();
  };

  addUser = () => {
    let usersUrl = "http://localhost:3001/users";
    axios
      .post(usersUrl, {
        name: "Test User",
        feedSrc: "images/raptors.jpg",
      })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
    this.stateChange();
  };

  /* API calls to local json-server instance - data can be seen at /api/api.json */

  stateChange = () => {
    let usersUrl = "http://localhost:3001/users";
    axios.get(usersUrl).then((resp) => {
      const users = resp.data;
      this.setState({ users });
    });
    let roomsUrl = "http://localhost:3001/rooms";
    axios.get(roomsUrl).then((resp) => {
      const rooms = resp.data;
      this.setState({ rooms });
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="video-container">
            
            {this.state.users.map((videoData) => (
              <div key={videoData.id} className="video-card">
                <VideoContainer
                  id={videoData.id}
                  handler={this.handler}
                  name={videoData.name}
                  src={videoData.feedSrc}
                />
              </div>
            ))}
          </div>
        </div>
        <nav className="sidebar">
          <div className="room">
            <h2>Active Room</h2>
            {this.state.users.map((videoData) => (
              <h3 key={videoData.id}>{videoData.name}</h3>
            ))}
            {this.state.users.length < 16 ? 
            <span className="add-user" onClick={this.addUser}>
              <FontAwesomeIcon icon={faUserPlus} /> Add User
            </span> : <span></span>}
            
          </div>
          {this.state.rooms.map((roomsData) => (
            <Room
              key={roomsData.id}
              handler={this.handler}
              name={roomsData.name}
              active={roomsData.active}
              subscribed={roomsData.subscribed}
            />
          ))}
        </nav>
      </div>
    );
  }
}

export default App;
