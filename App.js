import React, { Component } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Screen1 from "./App/Screens/Screen1";
import Screen2 from "./App/Screens/Screen2";
import Screen3 from "./App/Screens/Screen3";
import Screen4 from "./App/Screens/Screen4";

const App = createSwitchNavigator(
  {
    Screen1: { screen: Screen1 },
    Screen2: { screen: Screen2 },
    Screen3: { screen: Screen3 },
    Screen4: { screen: Screen4 },
  },
  {
    initialRouteName: "Screen1",
  }
);

export default createAppContainer(App);
