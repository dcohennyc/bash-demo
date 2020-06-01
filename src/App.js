import React, { Component } from 'react';
import './App.css';
import VideoContainer from './components/VideoContainer/VideoContainer';
import Room from './components/Room/Room';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      rooms: []
    };
  }

  componentDidMount() {
    this.stateChange();
  }

  handler = () => {
    this.stateChange();
  }


  stateChange = () => {
    let usersUrl = "http://localhost:3001/users"
    axios.get(usersUrl)
      .then(resp => {
        const users = resp.data;
        this.setState({ users });
      });
    let roomsUrl = "http://localhost:3001/rooms"
    axios.get(roomsUrl)
      .then(resp => {
        const rooms = resp.data;
        this.setState({ rooms });
      });
  }
  

  render() {
    return (
      <div className="App">
        <div className="container">
          <header className="App-header"></header>
            <div className="video-container">
              {this.state.users.map(videoData => (
                <div key={videoData.userid} className="video-card">
                  <VideoContainer
                    key={videoData.userid}
                    name={videoData.name}
                    src={videoData.feedSrc} />
                </div>
              ))}
            </div>
        </div>
        <nav className="sidebar">
          <h2>Rooms</h2>
          {this.state.rooms.map(roomsData => (
            <div className="room" key={roomsData.roomid}>
              <Room
                name={roomsData.name}
                handler={this.handler}
                subscribed={roomsData.subscribed} />
            </div>
          ))}
        </nav>
      </div>
    );
  }
}

export default App;
