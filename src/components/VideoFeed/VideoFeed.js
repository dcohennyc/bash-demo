import React from 'react';

class VideoFeed extends React.Component {
    render() {
        return <div><li>{this.props.name}</li>
            <img src={this.props.src} /></div>;
    }
}

export default VideoFeed