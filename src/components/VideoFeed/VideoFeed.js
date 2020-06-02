import React from 'react';
import axios from 'axios';
import './VideoFeed.css';


class VideoFeed extends React.Component {

    removeUser = () => {
        let userid = this.props.id;
        let usersUrl = "http://localhost:3001/users/" + userid;
        axios.delete(usersUrl)
        .then(resp => {
            console.log(resp.data)
        }).catch(error => {
            console.log(error)
        });
        this.props.handler();
        console.log(usersUrl);
    }

    render() {
        return <div><li>{this.props.name} <span onClick={this.removeUser}>(x)</span></li>
            <img src={this.props.src} /></div>;
    }
}

export default VideoFeed