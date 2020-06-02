import React from 'react';
import './Room.css';
import axios from 'axios';

class Room extends React.Component {

    addUser = () => {
        let usersUrl = "http://localhost:3001/users"
        axios.post(usersUrl, {
            "name": 'Test User',
            "feedSrc": "images/raptors.jpg"
          })
          .then(resp => {
            console.log(resp.data)
          }).catch(error => {
            console.log(error)
          });
        this.props.handler();
    }

    render() {
      const isActive = this.props.active;
        return <div className="room"><h1>{this.props.name} {isActive ? <span></span> : <span>(join)</span>}</h1>
        {this.props.subscribed.map(subscribed => (
              <h3 key={subscribed.id}>{subscribed.name}</h3>
          ))}
        {isActive ? 
        <span className="add-user" onClick={ this.addUser }>(add user)</span>
        : <span></span>}
        </div>
        ;
    }
}

export default Room;