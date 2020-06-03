import React from 'react';
import './Room.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'


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
        return <div className="room"><h2>{this.props.name} {isActive ? <span></span> : <span className="join"><FontAwesomeIcon icon={faPlusCircle} /> Join</span>}</h2>
        {this.props.subscribed.map(subscribed => (
              <h3 key={subscribed.id}>{subscribed.name}</h3>
          ))}
        {isActive ? 
        <span className="add-user" onClick={ this.addUser }><FontAwesomeIcon icon={faUserPlus} /> Add User</span>
        : <span></span>}
        </div>
        ;
    }
}

export default Room;