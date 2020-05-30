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
      users: []
    };
  }

  componentDidMount() {
    let url = "http://localhost:3001/users"
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let users = data.map((user,index) => {
          return (
            <div key={index}>
              <h3>{user.name}: {user.rooms}</h3>
            </div>
          )
        })
        this.setState({users: users});
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.users}
        </header>
        <VideoContainer />
        <Sidebar />
        <Room />
  
      </div>
    );  
  }
}

export default App;
