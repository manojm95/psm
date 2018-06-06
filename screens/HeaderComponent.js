import React, { Component } from 'react';
import {
    Text, View, Image, TouchableHighlight
} from 'react-native';

export default class HeaderComponent extends Component {
    render() {
        return (<View style={{
            height: 90,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>
            <TouchableHighlight style={{ marginLeft: 10, marginTop: 20 }}
                onPress={() => {
                    const { navigate } = this.props.navigation;
                    navigate('DrawerOpen');
                }}>
                <Image
                    style={{ width: 25, height: 25 }}
                    source={require('../icons/menu-icon.png')}
                />
            </TouchableHighlight>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ marginLeft: 10, marginTop: 20, marginRight: 13 }}>SettingsScreen</Text>
            </View>
        </View>);
    }
}
