import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoContainer from './components/VideoContainer/VideoContainer';
import Sidebar from './components/Sidebar/Sidebar';
import Room from './components/Room/Room';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      rooms: []
    };
  }

  componentDidMount() {
    let usersUrl = "http://localhost:3001/users"
    fetch(usersUrl)
      .then(resp => resp.json())
      .then(data => this.setState({ users: data }));
    let roomsUrl = "http://localhost:3001/rooms"
    fetch(roomsUrl)
      .then(resp => resp.json())
      .then(data => this.setState({ rooms: data }));
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <header className="App-header">
            {this.state.users.map(videoData => (
              <div key={videoData.userid} className="video-card">
                <VideoContainer
                  key={videoData.userid}
                  name={videoData.name}
                  src={videoData.feedSrc} />
              </div>
            ))}
          </header>
        </div>
        <nav className="sidebar">
          <h2>Rooms</h2>
          {this.state.rooms.map(roomsData => (
            <div className="room" key={roomsData.roomid}>
              <Room
                name={roomsData.name} />
            </div>
          ))}
        </nav>
      </div>
    );
  }
}

export default App;
