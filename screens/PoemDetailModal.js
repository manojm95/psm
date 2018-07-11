import React, { Component } from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class PoemDetailModal extends Component  {


    renderItems(){
        console.log('Modalll ----> 3'+this.props.sc);
        if(this.props.sc){
            return(
                <View>
                    <Image source={{uri : this.props.data.image}} style={{ 
                height: SCREEN_HEIGHT - (SCREEN_HEIGHT*.20), 
                width: SCREEN_WIDTH, 
                resizeMode: 'contain' }}/>
                        <View style={{ flex: 1, alignItems:'center' }}>

            {/*<Text>{this.props.data.id}</Text>*/}
            {/*<Button style={{ color: '#00FF00'}} onPress={this.props.onPress} title= "View Now" />*/}
            <Button icon={{ name: 'code'}} backgroundColor = '#FFFFFF' color='#EB984E' title= "Get Back.." onPress={this.props.onPress} style={{width: SCREEN_WIDTH-20, 
                marginLeft: 10,
                marginRight:10,
                height: SCREEN_HEIGHT - (SCREEN_HEIGHT*.80),
                  }} />
                        </View>
                    </View>
            )
        }
    }

    render(){
        console.log('nnnn'+this.props.id);
        return(
         <Modal style = {{  marginTop: SCREEN_HEIGHT/10, marginLeft:0, marginRight:0, marginBottom: 5 }}
         isVisible={this.props.sc!==null}
         onBackButtonPress={this.props.onPress}
         transparent
         animationIn='slideInUp'
         >

            <View style={{ flex: 1, backgroundColor:'#F4D03F', margin: 0}}>
            <View style={{
                flex: 1,
                backgroundColor:'rgba(0,0,0,0)'
            }}>
            {this.renderItems()}

            </View>
        </View>
        </Modal>)
    }
}

export default PoemDetailModal;