import React from 'react';
import VideoFeed from '../VideoFeed/VideoFeed';

class VideoContainer extends React.Component {
    render() {
        return <VideoFeed 
                name={this.props.name}
                src={this.props.src}
                />;     
    }
}

export default VideoContainer