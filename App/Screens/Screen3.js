import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Screen3 extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <ImageBackground
          source={require("../Assets/pic2.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <TouchableOpacity
            style={{ paddingTop: 60 }}
            onPress={() => this.props.navigation.navigate("Screen1")}
          >
            <Text style={styles.text}>
              <Icon name="chevron-left" size={30} color="black" />
              Back
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              fontWeight: "bold",
              paddingTop: 380,
              fontSize: 27,
              textAlign: "center",
            }}
          >
            <Text style={{ fontSize: 40 }}>About:</Text>
            {"\n"}
            {"\n"}
            S.L.I.{" "}
            <Text style={{ fontStyle: "italic" }}>
              (Sign Language Interpreter)
            </Text>{" "}
            is an application developed to interpret signs and convert them into
            spoken text.
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
  text: {
    fontWeight: "bold",
    fontSize: 30,
    paddingLeft: 18,
  },
});
