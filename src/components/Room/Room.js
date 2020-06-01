import React from 'react';
import './Room.css';
import axios from 'axios';

class Room extends React.Component {

    addUser = () => {
        let usersUrl = "http://localhost:3001/users"
        axios.post(usersUrl, {
            "name": 'Test User',
            "feedSrc": "test.jpg"
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        this.props.handler();
    }

    render() {
        return <div className="room"><h1>{this.props.name} </h1>
        {this.props.subscribed.map(subscribed => (
              <h2>{subscribed.name}</h2>
          ))}
          <span className="add-user" onClick={ this.addUser }>(add user)</span>
        </div>
        ;
    }
}

export default Room;