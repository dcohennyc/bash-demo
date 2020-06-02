import React from 'react';
import VideoFeed from '../VideoFeed/VideoFeed';
import './VideoContainer.css';


class VideoContainer extends React.Component {
    render() {
        return <VideoFeed 
                id={this.props.id}
                handler={this.props.handler}
                name={this.props.name}
                src={this.props.src}
                />;     
    }
}

export default VideoContainer