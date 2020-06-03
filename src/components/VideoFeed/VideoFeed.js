import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './VideoFeed.css';



class VideoFeed extends React.Component {

    removeUser = () => {
        let userid = this.props.id;
        let usersUrl = "http://localhost:3001/users/" + userid;
        axios.delete(usersUrl)
        .then(resp => {
        }).catch(error => {
        });
        this.props.handler();
    }

    render() {
        return <div><li>{this.props.name} <span onClick={this.removeUser}><FontAwesomeIcon icon={faTimesCircle} /></span>
        </li>
            <img src={this.props.src} alt={this.props.name} /></div>;
    }
}

export default VideoFeed