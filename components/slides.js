import React, { Component } from "react";
import { View, ScrollView, Dimensions } from "react-native";
import { Button, Icon, ImageBackground, Text } from "@shoutem/ui";

const S_W = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

class Slide extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button styleName="stacked clear" onPress={this.props.onClick}>
          <Icon name="tweet" />
          <Text>Thamizhil Moozhga</Text>
        </Button>
      );
    }
  }

  skipIntro(index) {
    if (index === 0) {
      return (
        <Button styleName="stacked clear" onPress={this.props.onClick}>
          <Text>Skip Intro</Text>
        </Button>
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <ImageBackground
          key={slide.text}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: S_W,
            height: SCREEN_HEIGHT
          }}
          source={{
            uri: "https://s3.amazonaws.com/testbucketmanojm95/background.JPG"
          }}
          >
          <Text style={styles.slideText}>{slide.text}</Text>
          {this.skipIntro(index)}
          {this.renderLastSlide(index)}
        </ImageBackground>
      );
    });
  }

  render() {
    return (
      <ScrollView horizontal style={{ flex: 1 }} pagingEnabled>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideText: { fontSize: 20, fontFamily: "Rubik-Italic" },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: S_W
  }
};

export default Slide;
