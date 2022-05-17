import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAweIcon from "react-native-vector-icons/FontAwesome";

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
      const stopVideo = async () => {
        camera.stopRecording();
      };
    }
  };

  if (hasCameraPermission === null || hasAudioPermission === null) {
    return <View />;
  }

  if (hasCameraPermission === false || hasAudioPermission === false) {
    return <Text> No Access To Camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingTop: 50 }}>
        <TouchableOpacity>
          <FontAweIcon
            name="chevron-left"
            iconStyle={(alignItems = "center")}
            size={30}
            onPress={() => navigate("Screen12")}
          >
            <Text style={styles.text}>Back</Text>
          </FontAweIcon>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <View style={styles.cameraContainer}>
          <Camera
            ref={(ref) => setCamera(ref)}
            style={styles.fixedRatio}
            ratio={"4:3"}
          />
        </View>
      </View>

      <Icon.Button
        style={styles.buttons}
        name="record-circle"
        size={40}
        color="red"
        backgroundColor="white"
        onPress={() => takeVideo()}
      ></Icon.Button>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 30,
    paddingLeft: 18,
  },
  cameraContainer: {
    flex: 1,
    flexDirection: "row",
  },
  fixedRatio: {
    flex: 1,
    height: "138%",
  },
});
