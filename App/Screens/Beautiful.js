import VideoRecorder from "react-native-beautiful-video-recorder";
import React, { Component } from "react";

import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

start = () => {
  // 30 seconds
  this.videoRecorder.open({ maxLength: 30 }, (data) => {
    console.log("captured data", data);
  });
};

export default class Beautiful extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <TouchableOpacity onPress={this.start}>
          <Button title="press" style={styles.buttons}></Button>
        </TouchableOpacity>
        <VideoRecorder
          ref={(ref) => {
            this.videoRecorder = ref;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  camera: {
    width: 390,
    height: 820,
  },
  text: {
    fontWeight: "bold",
    fontSize: 25,
    paddingLeft: 15,
  },
  cameraContainer: {
    flex: 1,
    flexDirection: "row",
  },
  fixedRatio: {
    flex: 1,
    height: "138%",
  },
  video: {
    alignSelf: "center",
    width: 350,
    height: 220,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
