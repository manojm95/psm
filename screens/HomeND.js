import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import { connect } from "react-redux";
import axios from "axios";
import Header from "./HeaderComponent";
import { NavigationActions, StackActions } from "react-navigation";
import Spinner from "react-native-loading-spinner-overlay";

import {
  getCards,
  getFavCards,
  resetCards
} from "../actions/cardcreatoraction";

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

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

class HomeND extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  componentWillMount() {
    console.log("RESETACTION CWM");
    //this.props.resetCards();
  }

  renderSpinner() {
    return (
      <View style={{ zIndex: 500 }}>
        <Spinner
          visible={this.state.visible}
          color="#ffff00"
          textContent={"Loading..."}
          textStyle={{ color: "#FFFF00" }}
          overlayColor="#ffffff"
        >
          <Image
            style={{
              height: 60,
              width: 60,
              marginTop: SCREEN_HEIGHT / 2 - 30,
              marginLeft: SCREEN_WIDTH / 2 - 30
            }}
            source={require("../icons/spinner.gif")}
          />
        </Spinner>
      </View>
    );
  }

  render() {
    console.log("HomeND method render");
    return (
      <View style={{ flex: 1 }}>
        {this.renderSpinner()}
        <ImageBackground
          style={{ flex: 1, justifyContent: "flex-start" }}
          source={{
            uri: "https://s3.amazonaws.com/testbucketmanojm95/featherfinal.jpg"
          }}
        >
          <Header head="Categories" {...this.props} />
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              marginTop: SCREEN_HEIGHT * 0.1
            }}
          >
            <Button
              styleName="clear"
              style={{
                backgroundColor: "#00000000",
                marginTop: 10,
                marginBottom: 10
              }}
              onPress={() => {
                this.setState({ visible: true });
                setTimeout(() => {
                  this.setState({ visible: false });
                }, 3000);
                this.props.getFavCards(this.props.fc,
                  () => {
                    this.props.navigation.navigate("Home");
                  });
                //this.props.navigation.navigate("Home");

              }}
            >
              <Icon name="cart" />
              <Text>Favorites</Text>
            </Button>
            <Button
              styleName="clear"
              style={{
                backgroundColor: "#00000000",
                marginTop: 10,
                marginBottom: 10
              }}
              onPress={() => {
                this.setState({ visible: true });
                setTimeout(() => {
                  this.setState({ visible: false });
                }, 3000);
                this.props.getCards(
                  "https://kuwxlkua52.execute-api.us-east-1.amazonaws.com/dev/psmjson/single?category=Love",
                  () => {
                    this.props.navigation.navigate("Home");
                  }
                );
              }}
            >
              <Icon name="cart" />
              <Text>Love</Text>
            </Button>
            <Button
              styleName="clear"
              style={{
                backgroundColor: "#00000000",
                marginTop: 10,
                marginBottom: 10
              }}
            >
              <Icon name="cart" />
              <Text>Political</Text>
            </Button>
            <Button
              styleName="clear"
              style={{
                backgroundColor: "#00000000",
                marginTop: 10,
                marginBottom: 10
              }}
            >
              <Icon name="cart" />
              <Text>Nature</Text>
            </Button>
            <Button
              styleName="clear"
              style={{
                backgroundColor: "#00000000",
                marginTop: 10,
                marginBottom: 10
              }}
            >
              <Icon name="cart" />
              <Text>Thamizh</Text>
            </Button>
            <Button
              styleName="clear"
              style={{
                backgroundColor: "#00000000",
                marginTop: 10,
                marginBottom: 10
              }}
            >
              <Icon name="cart" />
              <Text>Family</Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const mapStatetoProps = ({ favcards }) => {
  //console.log('kkkkkkk---->'+JSON.stringify(cards,null,4))
  console.log("FAVCARDSMAPHomend--->" + JSON.stringify(favcards, null, 4));
  return { fc: favcards };
};

export default connect(mapStatetoProps, { getCards, getFavCards, resetCards })(
  HomeND
);
