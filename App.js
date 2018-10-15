import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Dimensions } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { Provider } from 'react-redux';
import { Font, Components } from 'expo';
import { Examples } from '@shoutem/ui';
import { WelcomeScreen, AuthScreen, ReviewScreen, SettingsScreen, CancelND, Panels, NavDrawerContent } from './screens';
import reducers from './reducers';
import DeckScreen from './screens/DeckScreen';
import HomeLanding from './screens/HomeLanding';
import HomeND from './screens/HomeND';
import store from './store';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;


export default class App extends React.Component {

  state = {
    fontsAreLoaded: false,
  }


  async componentWillMount() {
    await Font.loadAsync({
      'Rubik-Black': require('./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
      'Rubik-BlackItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
      'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
      'Rubik-BoldItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
      'Rubik-Italic': require('./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
      'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
      'Rubik-LightItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
      'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
      'Rubik-MediumItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
      'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
      'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
    });

    this.setState({fontsAreLoaded: true});
  }

    componentDidCatch(err, info) {
    console.log("ERRRRRRRRORRRRRRR1111--->");
  }


  render() {


    if (!this.state.fontsAreLoaded) {
      return <View>
        <Text>App Loading...</Text>
      </View>;
    }

    const NavDrawer = DrawerNavigator ({
        Home: { screen: DeckScreen },
        Help: { screen: Panels},
        Category: { screen: HomeLanding},
        Cancel: { screen: CancelND }
    },
    {
      drawerWidth: SCREEN_WIDTH * (75/100),
      contentComponent: NavDrawerContent,
      drawerPosition: 'right',
      initialRouteName: 'Home'
    }
    );

    

    const MainNavigator = TabNavigator (
      {
      welcome: { screen: WelcomeScreen },
      auth: { screen: HomeND },
      main: {
        screen : TabNavigator (
          {
          Map: { screen: HomeLanding
          },
          //Deck: {screen: DeckScreen},
          Poem: { screen: NavDrawer}
          },
          {
          swipeEnabled: false,
          lazyLoad: true,
          animationEnabled: false,
          tabBarPosition: 'bottom',
    navigationOptions: {
      tabBarVisible: false 
    }
          })
      }
    }, {
    lazy: true,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    navigationOptions: {
      tabBarVisible: false 
    }
}
);

    return (
      <Provider store={store}>
        <MainNavigator />
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
