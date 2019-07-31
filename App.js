/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions
} from "react-native";
import VideoPlayer from "react-native-video-player";
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
const window = Dimensions.get("window");
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 10,
      progress: 0,
      seeking: false
    };
  }
  render() {
    return (
      <Fragment>
        <VideoPlayer
          endWithThumbnail
          video={{ uri: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" }}
          videoWidth={window.width}
          videoHeight={window.height / 2}
          progress={this.state.progress}
          ref={r => (this.player2 = r)}
          seeking={this.state.seeking}
        />
        <VideoPlayer
          endWithThumbnail
          video={{ uri: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" }}
          videoWidth={window.width}
          videoHeight={window.height / 2}
          ref={r => (this.player = r)}
          onStart={this.onStartVideo1}
          async={this.async}
          update2Seek={this.update2Seek}
        />
      </Fragment>
    );
  }
  onStartVideo1 = () => {
    this.player2.onStartPress();
  };
  async = progress => {
    this.setState({
      progress
    });
  };
  update2Seek = () => {
    this.setState({
      seeking: !this.state.seeking
    });
  };
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: "absolute",
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark
  },
  highlight: {
    fontWeight: "700"
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right"
  }
});

export default App;
