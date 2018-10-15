import React, { Component } from "react";
import { Text, View, Platform } from "react-native";
import { Button } from "react-native-elements";
import Header from "./HeaderComponent";

class ReviewScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Review"
  };

  render() {
    return (
      <View>
        <Header {...this.props} />
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}

export { ReviewScreen };
