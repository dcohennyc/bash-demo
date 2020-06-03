import React from 'react';
import './Room.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'


class Room extends React.Component {

    render() {
      const isActive = this.props.active;
        return <div className="room"><h2>{this.props.name} {isActive ? <span></span> : <span className="join"><FontAwesomeIcon icon={faPlusCircle} /> Join</span>}</h2>
        {this.props.subscribed.map(subscribed => (
              <h3 key={subscribed.id}>{subscribed.name}</h3>
          ))}
        </div>
        ;
    }
}

export default Room;