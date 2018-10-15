import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import { connect } from "react-redux";
import axios from "axios";
import Header from "./HeaderComponent";
import Toaster, { ToastStyles } from 'react-native-toaster';
import { getCards, getFavCards } from "../actions/cardcreatoraction";
import Spinner from "react-native-loading-spinner-overlay";


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

class HomeLanding extends Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      message: null
    };
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
    return (
      <View style={{ flex: 1 }}>
        <Toaster message={this.state.message} />
        {this.renderSpinner()}
        <ImageBackground
          style={{ flex: 1, justifyContent: "flex-start" }}
          source={{
            uri: "https://s3.amazonaws.com/testbucketmanojm95/featherfinal.jpg"
          }}
        >
          <Header head="Categories" {...this.props} ham='no' />
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
                console.log('IIIIIIIII----->',JSON.stringify(this.props));
                if(this.props.fc.length > 0 ){
                this.setState({ visible: true });
                setTimeout(() => {
                  this.setState({ visible: false });
                }, 5000);
                this.props.getFavCards(this.props.fc,
                  () => {
                    this.props.navigation.navigate("Poem");
                  });
                console.log("MMMMMMMMM", this.props.navigation);
                //this.props.navigation.navigate("Poem");
                } else 
                {
                    this.setState({ message: {text: 'Oops! There are no poems saved as favorite. Please swipe cards to right to add cards to favorites!', styles: ToastStyles.info, height: 400 }})
                }
              }}
            >
              <Image style={{ height: 16, width: 16, alignItems: 'center', justifyContent: 'center', marginRight: 18 }} source={require("../icons/favourites.png")} />
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
                }, 5000);
                this.props.getCards(
                  "https://kuwxlkua52.execute-api.us-east-1.amazonaws.com/dev/psmjson/single?category=Love",
                  () => {
                    this.props.navigation.navigate("Poem");
                  }
                );
              }}
            >
              <Image style={{ height: 16, width: 16, alignItems: 'center', justifyContent: 'center', marginRight: 18 }} source={require("../icons/heart.png")} />
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
              <Image style={{ height: 16, width: 16, alignItems: 'center', justifyContent: 'center', marginRight: 18 }} source={require("../icons/politics.png")} />
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
              <Image style={{ height: 16, width: 16, alignItems: 'center', justifyContent: 'center', marginRight: 18 }} source={require("../icons/nature.png")} />
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
              <Image style={{ height: 16, width: 16, alignItems: 'center',  justifyContent: 'center', marginRight: 18 }} source={require("../icons/tamil2.png")}    resizeMode="contain"/>
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
              <Image style={{ height: 16, width: 16, alignItems: 'center', justifyContent: 'center', marginRight: 18 }} source={require("../icons/family.png")} />
              <Text>Family</Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const mapStatetoProps = ({ favcards }) => {
  console.log("FAVCARDSMAPhy--->" + JSON.stringify(favcards, null, 4));
  return { fc: favcards };
};

export default connect(mapStatetoProps, { getCards, getFavCards })(HomeLanding);
