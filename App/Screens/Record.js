import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { Camera } from "expo-camera";
import Icon from "react-native-vector-icons/FontAwesome";
import { Video } from "expo-av";

export default function App({ navigation: { navigate } }) {
  const [hasAudioPermission, setHasAudioPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [record, setRecord] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

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
        maxDuration: 10,
      });
      setRecord(data.uri);
      console.log(data.uri); // most prob the way to send the video to flask Idk?
    }
  };

  const stopVideo = async () => {
    camera.stopRecording();
  };

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
          type={type}
          ratio={"4:3"}
        />
      </View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: record,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
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

      <Button title="Take Video" onPress={() => takeVideo()} />
      <Button title="Stop Video" onPress={() => stopVideo()} />
    </View>
  );
}

/*
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.back
                  : Camera.Constants.Type.back
              );
            }}
          ></TouchableOpacity>

          <TouchableOpacity
            style={{ paddingTop: 50 }}
            onPress={() => navigate("Screen1")}
          >
            <Text style={styles.text}>
              <Icon name="chevron-left" size={20} color="black" />
              Back
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
*/

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
    aspectRatio: 1,
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
