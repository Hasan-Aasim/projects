import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, View, StyleSheet } from "react-native";

function TScreen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 0.5,
  },
  view: {
    flex: 0.5,
  },
});

export default TScreen;
