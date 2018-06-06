import React, { Component } from 'react';
import { View, Dimensions, ScrollView } from 'react-native';
import Header from './HeaderComponent';
import { Image, Title, Subtitle, Heading, Button, Text, Tile,ImageBackground, Icon } from '@shoutem/ui'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;

class HelpND extends Component {

    static navigationOptions = {
        drawerLabel: 'Help'
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header {...this.props}/>
                <ScrollView style={{ flexDirection: 'column', backgroundColor: 'rgba(52, 52, 52, 0.2)' }}>
                    <ImageBackground
                style={{ height: (SCREEN_WIDTH/2)-10, width: SCREEN_WIDTH-1.5, marginTop: 1, marginBottom: .5, marginLeft: 1, marginRight: .5,backgroundColor:'#000000', alignItems:'center', justifyContent: 'center' }}>
                <Tile>
                    {/*<Title>MIKE PATTON TEAMING WITH JOHN KAADA</Title>
                    <Subtitle styleName="line-through sm-gutter-top">150.00</Subtitle>
                    <Heading>99.99</Heading>*/}
                    <Image style={{ height: (SCREEN_WIDTH/4)-10, width: SCREEN_WIDTH/3.5 }} source={require('../icons/psm_logo.png')}></Image>
                    <Subtitle styleName="line-through sm-gutter-top">150.00</Subtitle>
                </Tile>
                </ImageBackground>
                <View style={{ flexDirection: 'row'}}>
                <ImageBackground
                style={{ height: (SCREEN_WIDTH/2)-10, width: (SCREEN_WIDTH/2)-1.5, marginTop: 1, marginBottom: .5, marginLeft: 1, marginRight: .5,backgroundColor:'#000000' }}>
                {/*source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}>*/}
                <Tile>
                    {/*<Title>MIKE PATTON TEAMING WITH JOHN KAADA</Title>
                    <Subtitle styleName="line-through sm-gutter-top">150.00</Subtitle>
                    <Heading>99.99</Heading>*/}
                    <Button styleName="clear" style={{ backgroundColor: '#00000000'}}><Icon name="cart" /><Text>CLAIM COUPON</Text></Button>
                </Tile>
                </ImageBackground>
                <ImageBackground
                style={{ height: (SCREEN_WIDTH/2)-10, width: (SCREEN_WIDTH/2)-1.5, marginTop: 1, marginBottom: .5, marginLeft: 1, marginRight: .5,backgroundColor:'#000000'}}>
                {/*source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}>*/}
                <Tile>
                    {/*<Title>MIKE PATTON TEAMING WITH JOHN KAADA</Title>
                    <Subtitle styleName="line-through sm-gutter-top">150.00</Subtitle>
                    <Heading>99.99</Heading>*/}
                    <Button styleName="clear" style={{ backgroundColor: '#00000000'}}><Icon name="cart" /><Text>CLAIM COUPON</Text></Button>
                </Tile>
                </ImageBackground>
                </View>
                <View style={{ flexDirection: 'row'}}>
                <ImageBackground
                style={{ height: (SCREEN_WIDTH/2)-10, width: (SCREEN_WIDTH/2)-1.5, marginTop: 1, marginBottom: .5, marginLeft: 1, marginRight: .5,backgroundColor:'#000000' }}>
                {/*source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}>*/}
                <Tile>
                    {/*<Title>MIKE PATTON TEAMING WITH JOHN KAADA</Title>
                    <Subtitle styleName="line-through sm-gutter-top">150.00</Subtitle>
                    <Heading>99.99</Heading>*/}
                    <Button styleName="clear" style={{ backgroundColor: '#00000000'}}><Icon name="cart" /><Text>CLAIM COUPON</Text></Button>
                </Tile>
                </ImageBackground>
                <ImageBackground
                style={{ height: (SCREEN_WIDTH/2)-10, width: (SCREEN_WIDTH/2)-1.5, marginTop: 1, marginBottom: .5, marginLeft: 1, marginRight: .5,backgroundColor:'#000000' }}>
                {/*source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}>*/}
                <Tile>
                    {/*<Title>MIKE PATTON TEAMING WITH JOHN KAADA</Title>
                    <Subtitle styleName="line-through sm-gutter-top">150.00</Subtitle>
                    <Heading>99.99</Heading>*/}
                    <Button styleName="clear" style={{ backgroundColor: '#00000000'}}><Icon name="cart" /><Text>CLAIM COUPON</Text></Button>
                </Tile>
                </ImageBackground>
                </View>
                 <View style={{ flexDirection: 'row'}}>
                <ImageBackground
                style={{ height: (SCREEN_WIDTH/2)-10, width: (SCREEN_WIDTH/2)-1.5, marginTop: 1, marginBottom: .5, marginLeft: 1, marginRight: .5,backgroundColor:'#000000' }}>
                {/*source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}>*/}
                <Tile>
                    {/*<Title>MIKE PATTON TEAMING WITH JOHN KAADA</Title>
                    <Subtitle styleName="line-through sm-gutter-top">150.00</Subtitle>
                    <Heading>99.99</Heading>*/}
                    <Button styleName="clear" style={{ backgroundColor: '#00000000'}}><Icon name="cart" /><Text>CLAIM COUPON</Text></Button>
                </Tile>
                </ImageBackground>
                <ImageBackground
                style={{ height: (SCREEN_WIDTH/2)-10, width: (SCREEN_WIDTH/2)-1.5, marginTop: 1, marginBottom: .5, marginLeft: 1, marginRight: .5,backgroundColor:'#000000' }}>
                {/*source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}>*/}
                <Tile>
                    {/*<Title>MIKE PATTON TEAMING WITH JOHN KAADA</Title>
                    <Subtitle styleName="line-through sm-gutter-top">150.00</Subtitle>
                    <Heading>99.99</Heading>*/}
                    <Button styleName="clear" style={{ backgroundColor: '#00000000'}}><Icon name="cart" /><Text>CLAIM COUPON</Text></Button>
                </Tile>
                </ImageBackground>
                </View>
                
            </ScrollView>

            </View>
        )
    }
}

export  { HelpND };