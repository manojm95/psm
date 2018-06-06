import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import Header from './HeaderComponent'


class ReviewScreen extends Component {

    // static navigationOptions = ({ navigation }) => ({
    //     title: 'ReviewJobs',
    //     headerLeft: <Button title='Settings' onPress={()=>navigation.navigate('DrawerOpen')} backgroundColor="rgba(0,0,0,0)" color="rgba(0,122,255,1)"/>,
    //     style: {
    //         marginTop : Platform.OS === 'android'? 24:0
    //     }
    // });

    static navigationOptions = {
        drawerLabel: 'Review'
    }

    render() {
        return (

            <View>
                <Header {...this.props} />
                <Text>ReviewScreen</Text>
            </View>
        )
    }
}

export { ReviewScreen };

