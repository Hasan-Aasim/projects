import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import TScreen from "../Config/TScreen";

function Opening(props) {
  return (
    <TScreen style={styles.bcolor}>
      <View>
        <Text style={styles.Container}>S.L.I</Text>
        <Text style={styles.Container}>Sign Language Interpreter</Text>
      </View>
    </TScreen>
  );
}

const styles = StyleSheet.create({
  Container: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    padding: 10,
    paddingHorizontal: 19,
  },
  bcolor: {
    flex: 1,
    backgroundColor: "#00468B",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Opening;
