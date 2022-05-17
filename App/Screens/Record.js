import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { Camera } from "expo-camera";
import { Video } from "expo-av";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function App({ navigation: { navigate } }) {
  const [hasAudioPermission, setHasAudioPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [record, setRecord] = useState(null);
  const [type] = useState(Camera.Constants.Type.back);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const [disable, setDisable] = useState(false);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");

      const audioStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasAudioPermission(audioStatus.status === "granted");
    })();
  }, []);

  const takeVideo = async () => {
    if (camera) {
      const data = await camera.recordAsync({
        maxDuration: 2,
      });
      setRecord(data.uri);
      console.log(data.uri); // most prob the way to send the video to flask Idk?
      //just testing
      // remove code if video does not record properly
      //camera.stopRecording();
      const stopVideo = async () => {
        camera.stopRecording();
      };
    }
  };

  // const stopVideo = async () => {
  //   camera.stopRecording();
  // };

  if (hasCameraPermission === null || hasAudioPermission === null) {
    return <View />;
  }

  if (hasCameraPermission === false || hasAudioPermission === false) {
    return <Text> No Access To Camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={(ref) => setCamera(ref)}
          style={styles.fixedRatio}
          // type={type}
          ratio={"4:3"}
        />
      </View>
      {/*
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: record,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        //onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        onPlaybackStatusUpdate={(status) => setStatus(status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View>
      

      <Button
        title="Flep"
        onPress={() => {
          setType(
            type === camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}
      /> 
      function stateChange(newState) {
    setTimeout(function () {
        if (newState == -1) {
            alert('VIDEO HAS STOPPED');
        }
    }, 5000);
}
      */}

      <Icon.Button
        style={styles.buttons}
        name="record-circle"
        size={40}
        color="red"
        backgroundColor="white"
        onPress={() => takeVideo()}
      ></Icon.Button>
      {/* 
      <Icon.Button
        style={styles.buttons}
        name="record-circle"
        size={40}
        color="red"
        backgroundColor="white"
        //onPress={() => takeVideo()}
        onPress={() => stopVideo()}
      ></Icon.Button> */}
      {/* <TouchableHighlight
 onPress={
  () => { this.functionOne(); this.functionTwo(); }
 } */}
      {/* <Button title="Take Video" onPress={() => takeVideo()} />
      <Button title="Stop Video" onPress={() => stopVideo()} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
