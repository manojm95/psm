import React, {Component} from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { Button } from '@shoutem/ui';

const S_W = Dimensions.get('window').width;

class Slide extends Component {

    
    renderLastSlide(index){
        if((index)===this.props.data.length-1){
            return (
                // <Button title='Get Job' backgroundColor="rgba(0,0,0,0)"   buttonStyle={{ marginBottom: 20 }} onPress={this.props.onClick}/>
                <Button style={{backgroundColor: '#000000', padding: 0}} onPress={this.props.onClick}>
                    <Text style={{color: '#ffffff'}}>CHECK IN HERE</Text>
                </Button>
            )
        }
    }

    renderSlides(){
        return this.props.data.map((slide,index) => {
            return (<View key={slide.text} style={[styles.slide,{backgroundColor:slide.color}]}>
                <Text style={styles.slideText}>{slide.text}</Text>
                {this.renderLastSlide(index)}
            </View>)
        })
    }

    render(){
        return (
        <ScrollView horizontal style={{ flex: 1 }} pagingEnabled>
            {this.renderSlides()}
        </ScrollView>
    )
    }
}

const styles = {
    slideText : { fontSize: 30 }, 
    slide : {
        flex: 1, justifyContent : 'center', alignItems: 'center',width: S_W
    }
}

export default Slide;