import React, { Component } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Screen1 extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <ImageBackground
          source={require("../Assets/pic.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <View>
            <View style={styles.button1}>
              <Icon.Button
                name="camera"
                iconStyle={(alignItems = "center")}
                size={40}
                backgroundColor="green"
                onPress={() => this.props.navigation.navigate("Screen2")}
              ></Icon.Button>
            </View>

            <View style={styles.button2}>
              <Icon.Button
                name="question"
                size={40}
                backgroundColor="#ff6d16"
                onPress={() => this.props.navigation.navigate("Screen3")}
              ></Icon.Button>
            </View>

            <View style={styles.button2}>
              <Icon.Button
                name="phone"
                size={40}
                backgroundColor="#1AA7EC"
                onPress={() => this.props.navigation.navigate("Screen4")}
              ></Icon.Button>
            </View>
          </View>
        </ImageBackground>
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
  button1: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: 70,
    marginLeft: 250,
    paddingBottom: 25,
    borderRadius: 200,
    marginTop: 500,
  },
  button2: {
    width: 70,
    marginLeft: 250,
    paddingBottom: 25,
  },
  text: {
    fontWeight: "bold",
    fontSize: 25,
    paddingLeft: 15,
  },
});
