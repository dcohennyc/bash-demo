import React from 'react';

class Room extends React.Component {
    render() {
        return <h1>{this.props.name}</h1>;
    }
}

export default Room