import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import { NavigationActions } from "react-navigation";
import {
  Image,
  Title,
  Subtitle,
  Heading,
  Button,
  Text,
  Tile,
  ImageBackground,
  Icon
} from "@shoutem/ui";

const SCREEN_WIDTH = Dimensions.get("window").width;

class NavDrawerContent extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  hf = () => {
    // setTimeout(function(){ this.state.navigate('auth'); }, 500);
    //           this.state.navigate('DrawerClose');
    const { dispatch, navigate } = this.props.navigation;
    console.log("uuuuuuuuu", this.props.navigation);
    console.log("uuuuuuuuu222", NavigationActions);
    setTimeout(function() {
      navigate("Map");
    }, 500);
    navigate("DrawerClose");
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-start"
          }}
          source={{
            uri: "https://s3.amazonaws.com/testbucketmanojm95/navdraw2.jpg"
          }}
        >
          <Button
            onPress={() => {
              // setTimeout(function(){ this.state.navigate('auth'); }, 500);
              //           this.state.navigate('DrawerClose');
              const { navigate, dispatch } = this.props.navigation;
              setTimeout(function() {
                navigate("Home");
              }, 500);
              navigate("DrawerClose");
            }}
            styleName="clear"
            style={{
              backgroundColor: "#00000000",
              marginTop: 10,
              marginBottom: 10,
              marginLeft: SCREEN_WIDTH * (20 / 100)
            }}
          >
            <Icon style={{ height: 30, width: 30 }} name="home" />
            <Text style={{ fontSize: 15 }}>Home</Text>
          </Button>
          <Button
            onPress={this.hf}
            styleName="clear"
            style={{
              backgroundColor: "#00000000",
              marginTop: 10,
              marginBottom: 10,
              marginLeft: SCREEN_WIDTH * (20 / 100)
            }}
          >
            <Icon style={{ height: 30, width: 30 }} name="home" />
            <Text style={{ fontSize: 15 }}>Category</Text>
          </Button>
          <Button
            onPress={() => {
              // setTimeout(function(){ this.state.navigate('auth'); }, 500);
              //           this.state.navigate('DrawerClose');
              const { navigate, dispatch } = this.props.navigation;
              setTimeout(function() {
                navigate("Help");
              }, 500);
              navigate("DrawerClose");
            }}
            styleName="clear"
            style={{
              backgroundColor: "#00000000",
              marginTop: 10,
              marginBottom: 10,
              marginLeft: SCREEN_WIDTH * (20 / 100)
            }}
          >
            <Icon style={{ height: 30, width: 30 }} name="home" />
            <Text style={{ fontSize: 15 }}>Help</Text>
          </Button>
          <Button
            onPress={() => {
              // setTimeout(function(){ this.state.navigate('auth'); }, 500);
              //           this.state.navigate('DrawerClose');
              const { navigate, dispatch } = this.props.navigation;
              setTimeout(function() {
                navigate("Map");
              }, 250);
              navigate("DrawerClose");
            }}
            styleName="clear"
            style={{
              backgroundColor: "#00000000",
              marginTop: 10,
              marginBottom: 10,
              marginLeft: SCREEN_WIDTH * (20 / 100)
            }}
          >
            <Icon style={{ height: 30, width: 30 }} name="home" />
            <Text style={{ fontSize: 15 }}>Cancel</Text>
          </Button>
        </ImageBackground>
      </View>
    );
  }
}

export { NavDrawerContent };
