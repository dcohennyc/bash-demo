import React from 'react';

class Room extends React.Component {
    render() {
        return <div><h1>{this.props.name}</h1>
        {this.props.subscribed.map(subscribed => (
              <h2>{subscribed.name}</h2>
          ))}
        </div>;
    }
}

export default Room