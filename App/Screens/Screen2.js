import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Screen5 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera style={styles.camera}>
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
              onPress={() => this.props.navigation.navigate("Screen1")}
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
});
