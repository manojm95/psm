import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Animated,
  TouchableOpacity
} from "react-native"; //Step 1

class Panel extends Component {
  constructor(props) {
    super(props);

    this.icons = {
      //Step 2
      up: require("../icons/ua.png"),
      down: require("../icons/da.png")
    };

    this.state = {
      //Step 3
      title: props.title,
      expanded: true,
      animation: new Animated.Value()
    };
  }

  toggle() {
    console.log(this.state.expanded + "<----exp1");

    this.setState({
      expanded: !this.state.expanded //Step 2
    });

    console.log(this.state.expanded + "<----exp2");

    //Step 1
    let initialValue = this.state.expanded
        ? this.state.maxHeight + this.state.minHeight
        : this.state.minHeight,
      finalValue = this.state.expanded
        ? this.state.minHeight
        : this.state.maxHeight + this.state.minHeight;
    this.state.animation.setValue(initialValue); //Step 3
    Animated.spring(
      //Step 4
      this.state.animation,
      {
        toValue: finalValue
      }
    ).start(); //Step 5
  }

  _setMaxHeight(event) {
    if (!this.state.maxHeight) {
      this.setState({
        maxHeight: event.nativeEvent.layout.height
      });
    }
    console.log(this.state.maxHeight + "<----maxheight");
  }

  _setMinHeight(event) {
    if (!this.state.minHeight) {
      this.setState({
        minHeight: event.nativeEvent.layout.height
      });
    }
    console.log(this.state.minHeight + "<----minHeight");
  }

  render() {
    let icon = this.icons["down"];

    if (this.state.expanded) {
      icon = this.icons["up"]; //Step 4
    }

    //Step 5
    return (
      <Animated.View
        style={[styles.container, { height: this.state.animation }]}
      >
        <TouchableOpacity onPress={this.toggle.bind(this)}>
          <View
            style={styles.titleContainer}
            onLayout={this._setMinHeight.bind(this)}
          >
            <Text style={styles.title}>{this.state.title}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
          <Text
            style={{
              color: "rgba(255, 255, 255, 0.8)"
            }}
          >
            {this.props.children}
          </Text>
        </View>
      </Animated.View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(52, 52, 52, 0.1)",
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 5,
    marginRight: 5,
    overflow: "hidden"
  },
  titleContainer: {
    flexDirection: "row"
  },
  title: {
    flex: 1,
    padding: 10,
    color: "#fff",
    fontWeight: "bold"
  },
  button: {},
  buttonImage: {
    width: 30,
    height: 25
  },
  body: {
    padding: 10,
    paddingTop: 0
  }
});

export default Panel;
