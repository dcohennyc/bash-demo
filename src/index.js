import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import VideoFeed from './components/VideoFeed/VideoFeed';
import VideoContainer from './components/VideoContainer/VideoContainer';
import Sidebar from './components/Sidebar/Sidebar';
import Room from './components/Room/Room';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <VideoContainer />
    <VideoFeed />
    <Sidebar />
    <Room />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
