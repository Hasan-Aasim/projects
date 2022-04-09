import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Screen4 extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <ImageBackground
          source={require("../Assets/pic.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <TouchableOpacity
            style={{ paddingTop: 50 }}
            onPress={() => this.props.navigation.navigate("Screen1")}
          >
            <Text style={styles.text}>
              <Icon name="chevron-left" size={20} color="black" />
              Back
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: "bold",
              paddingTop: 450,
              fontSize: 20,
              textAlign: "center",
            }}
          >
            This Mobile Application has been developed by:{"\n"}
            Ammar Ahmed k180369@nu.edu.pk{"\n"}
            Hasan Aasim k181059@nu.edu.pk{"\n"}
            Muhammad Osama k180200@nu.edu.pk
          </Text>
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
