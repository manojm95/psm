import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from './HeaderComponent';
//import { connect } from 'react-redux';
import { NavigationBar, ImageBackground, Title } from '@shoutem/ui'


class HomeND extends Component {

    static navigationOptions = {
        drawerLabel: 'Home'
    }

    render() {
        return (
            <View style={styles.viewStyle}>
                <Header {...this.props}/>
                <ImageBackground
                    source={{uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png'}}
                    style={{ width: 375, height: 70 }}
                >
                <NavigationBar
                styleName="clear"
                centerComponent={<Title>TITLE</Title>}
                />
                </ImageBackground>
                <Text>HomeScreen</Text>
            </View>
        )
    }
}

styles={
    viewStyle: {
        margin: 10
    }
}

//const mapStatetoProps = state => {console.log(state)};


export { HomeND };