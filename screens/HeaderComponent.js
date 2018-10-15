import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions
} from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;

export default class HeaderComponent extends Component {
  renderham(){
    if(this.props.ham != "no") {
        return (
          <TouchableHighlight
          style={{ marginLeft: 10, marginTop: 20 }}
          onPress={() => {
            const { navigate } = this.props.navigation;
            navigate("DrawerOpen");
          }}
        >
          <Image
            style={{ width: 20, height: 25 }}
            source={require("../icons/menu.png")}
          />
        </TouchableHighlight>
        )
    }
  }

  render() {
    var temp = this.props.head;
    return (
      <View
        style={{
          height: SCREEN_HEIGHT * 0.1,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >
        {this.renderham()}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginRight: this.props.ham === "no" ? 0 : 17
          }}
        >
          <Text style={{ marginLeft: 10, marginTop: 20, marginRight: 13, color: '#515A5A' }}>
            {this.props.head !== undefined ? temp : "SettingsScreen"}
          </Text>
        </View>
      </View>
    );
  }
}
