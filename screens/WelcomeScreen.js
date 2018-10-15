import React, { Component } from "react";
import { Text, View } from "react-native";
import Slide from "../components/slides";

const SLIDE_DATA = [
  { text: "Welcome to JobApp", color: "#03A9F4" },
  { text: "Your Job Search Ends Here", color: "#009688" },
  { text: "Jump In To Explore", color: "#03A9F4" }
];

class WelcomeScreen extends Component {
  onSlideComplete = () => {
    this.props.navigation.navigate("Map", {
      itemId: 1
    });
  };

  render() {
    return <Slide data={SLIDE_DATA} onClick={this.onSlideComplete} />;
  }
}

export { WelcomeScreen };
