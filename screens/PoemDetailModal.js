import React, { Component } from "react";
import { View, Image, Text, Dimensions, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import Modal from "react-native-modal";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

class PoemDetailModal extends Component {
  renderItems() {
    if (this.props.sc) {
      return (
        <View>
          <TouchableOpacity onPress={this.props.onPress}>
            <Image
              source={{ uri: this.props.data.image }}
              style={{
                height: SCREEN_HEIGHT - SCREEN_HEIGHT * 0.1,
                marginTop: SCREEN_HEIGHT * 0.05,
                width: SCREEN_WIDTH,
                resizeMode: "contain"
              }}
            />
          </TouchableOpacity>
        </View>
      );
    }
  }

  render() {
    console.log("nnnn" + this.props.id);
    return (
      <Modal
        style={{ marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        isVisible={this.props.sc !== null}
        onBackButtonPress={this.props.onPress}
        transparent
        animationIn="slideInUp"
      >
        <TouchableOpacity style={{ flex: 1 }} onPress={this.props.onPress}>
          <View style={{ flex: 1, backgroundColor: "#616A6B", margin: 0 }}>
            <View
              style={{
                flex: 1,
                backgroundColor: "rgba(0,0,0,0)"
              }}
            >
              {this.renderItems()}
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
}

export default PoemDetailModal;
