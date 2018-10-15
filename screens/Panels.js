import React, { Component } from "react";
import { StyleSheet, Text, ScrollView, Dimensions, View } from "react-native";
import { LinearGradient } from "expo";
import Header from "./HeaderComponent";
import Panel from "./Panel"; // Step 1
const SCREEN_HEIGHT = Dimensions.get("window").height;

class Panels extends Component {
  static navigationOptions = {
    drawerLabel: "Panels"
  };

  render() {
    return (
      //Step 2:
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <LinearGradient
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={{ height: SCREEN_HEIGHT, padding: 15, borderRadius: 5 }}
          > 
                    <Header head="Help" {...this.props} />
            <Panel title="What is this app all about?">
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </Text>
            </Panel>
            <Panel title="How to bookmark the poems you like?">
              <Text>When you explore through poems under various categories, you can simply swipe in right direction to bookmar the poem. It would appear under Favorites category</Text>
            </Panel>
            <Panel title="How to report any issues with this app?">
              <Text>Once any error/exception happens we will rightaway look into the issue and will fix it asap</Text>
            </Panel>
             <Panel title="Can you use the poems for personal/commercial use?">
              <Text>You can use the works for your personal use but for commercial use it's prohibited and all works are protected.</Text>
            </Panel>
            <Panel title="How can I contact the author?">
              <Text>The author can be contacted via the below means
              @facebook                                         
              @twitter                                         
              @email      
              </Text>
            </Panel>
          </LinearGradient>
        </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export { Panels };
