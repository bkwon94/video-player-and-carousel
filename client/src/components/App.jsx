import React from 'react';

import VideoPlayer from './VideoPlayer.jsx';
import Carousel from './Carousel.jsx';
import sampleData from '../sampleData.js';
import {Paragraph} from './styles/styles.jsx';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movieTitle: sampleData.name,
      videos: sampleData.associatedVideos,
      playerVideo: sampleData.associatedVideos[0]
    }
  }

  render() {
    return (
      <div>
          <h2>APP</h2>
          <Paragraph>
            test test test
          </Paragraph>
        <VideoPlayer movieTitle={this.state.movieTitle} video={this.state.playerVideo}/>
        <Carousel />
      </div>
    )
  }
}

export default App;