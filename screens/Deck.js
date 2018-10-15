import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  View,
  Animated,
  PanResponder,
  Dimensions,
  LayoutAnimation,
  UIManager,
  Image,
  Easing,
  Platform
} from 'react-native';
import Spinner from "react-native-loading-spinner-overlay";


import { addFavCard, loadMoreFlag, getFavCards } from '../actions/cardcreatoraction';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

let dir = '';

class Deck extends Component {
  static defaultProps = {
    onSwipeRight: () => {},
    onSwipeLeft: () => {}
  }


  constructor(props) {
  
    super(props);

    const position = new Animated.ValueXY();
    this.pos1 = new Animated.Value(1000);
   

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          dir = 'right';
          this.forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          dir = 'left';
          this.forceSwipe('left');
        } else {
          this.resetPosition();
        }
      }
    });

    this.state = { panResponder, position, index: 0, visible: false };
  }

  componentWillReceiveProps(nextProps) {
    console.log('CWRP DECK--->'+(nextProps.data !== this.props.data)+'<---->'+nextProps.loadmore);
    if (nextProps.data !== this.props.data) {
      this.setState({ index: 0 });
    } 

    if(nextProps.loadmore) {
            this.setState({ index: 0 });
            this.props.loadMoreFlag(false);
    }

    //to avoid empty screen when fav cards is selected subsequentlt from categories 
    if(nextProps.favCardsrehitflag && ((nextProps.data.length) == this.state.index )){
            this.setState({ index: 0 });

    }

  }

  componentDidMount(){
    console.log('CDMM DECK--->');
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

//  componentDidMount () {
//   this.animate()
// }
animate () {
  this.pos1.setValue(0)
  Animated.timing(
    this.pos1,
    {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
    }
  ).start()
}

  // componentWillUpdate() {
  //   UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  //   LayoutAnimation.spring();
  // }

  forceSwipe(direction) {
    console.log("NHNHNH111");
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(this.state.position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION
    }).start(() => this.onSwipeComplete(direction));
  }

  onSwipeComplete(direction) {
     console.log("NHNHNH222");
    this.animate();
    const { onSwipeLeft, onSwipeRight, data } = this.props;
    const item = data[this.state.index];
    console.log('FLOWCHECK---> 1'+this.state.index);
         console.log("NHNHNH333---->",this.props.data.length +"         "+this.state.index);
    if(this.state.index >= this.props.data.length-1)
    {
                     console.log("NHNHNH444");
                this.props.setTopCard(null)
    }
    else 
    {       
                 console.log("NHNHNH555");
            console.log('FLOWCHECK---> 1'+JSON.stringify(this.props.data[this.state.index]),null,4);
            this.props.setTopCard(this.props.data[this.state.index + 1])

    }
    //console.log('FLOWCHECK---> 2'+direction);
    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
         console.log("NHNHNH6666");
    this.state.position.setValue({ x: 0, y: 0 });
         console.log("NHNHNH777" + this.state.index +'nnnnnnnnnn'+ (this.props.data.length-1));
    if(Platform.OS === "android"){
        if(this.state.index < this.props.data.length-1){
                     console.log("NHNHNH777.5555");
            this.setState({ index: this.state.index + 1 });
        }
        else {
              // this.setState({ visible: true });
              // setTimeout(() => {
              //     this.setState({ visible: false });
              //   }, 3000);
              // this.props.dummyAsync(this.props.fc,
              //     () => {
              //       this.props.navigation.navigate("Map");
              //     });
              //   setTimeout(() => {
              //     this.setState({ visible: false });
              //   }, 3000);
              //   setTimeout(() => {
              //     this.props.navigation.navigate("Map");
              //   }, 1000);
              this.setState({ index: this.state.index + 1 });
            //this.props.navigation.navigate("auth");

              //this.props.loadMoreFlag(true);
        }
    }else
    {
    this.setState({ index: this.state.index + 1 });
    }
         console.log("NHNHNH888");
    //console.log('llllll--->'+this.state.index+'nnnnnnnn'+this.props.data.length)
    //console.log('FLOWCHECK---> 3');
    //console.log('JJJJJJKKKKK---->'+JSON.stringify(this.props.favcards,null,4))


  }

  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 }
    }).start();
  }

  getCardStyle() {
    const { position } = this.state;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg']
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }]
    };
  }

  //C13180938359U6E

  renderCards() {
    console.log("RNMC 1"+this.state.index);
    console.log("RNMC 2"+this.props.data.length);
        console.log("RNMC 3"+this.props.data.length);
    
    if (this.state.index >= this.props.data.length) {
               console.log("NHNHNH999");
               dir = 'left';
      return this.props.renderNoMoreCards();
    }

    return this.props.data.map((item, i) => {
      if (i < this.state.index) { return null; }

      if (i === this.state.index) {
        return (
          <Animated.View
            key={item.id}
            style={[this.getCardStyle(), styles.cardStyle, { zIndex: 99, alignItems: 'center' }]}
            {...this.state.panResponder.panHandlers}
          >
            {this.props.renderCard(item)}

          </Animated.View>
        );
      }
      return (
       
        <Animated.View
          key={item.id}
          style={[styles.cardStyle, { zIndex: 5 }]}
        >
          {this.props.renderCard(item)}
        </Animated.View>
      );
    }).reverse();
  }

  renderHeart () {


        const marginLeft = this.pos1.interpolate({
    inputRange: [0, 1],
    outputRange: [SCREEN_WIDTH+100, (SCREEN_WIDTH/2)]
  })
  
  const opacity = this.pos1.interpolate({
    inputRange: [0, 0.25,0.5,0.75, 1],
    outputRange: [0, .5,1,.5,0]
  })

  const height = this.pos1.interpolate({
    inputRange: [0, 0.9, 1],
    outputRange: [30, 80, 90]
  })

  const width = this.pos1.interpolate({
   inputRange: [0, 0.9, 1],
    outputRange: [30, 80, 90]
  })

  const marginTop = this.pos1.interpolate({
   inputRange: [0,0.5,1],
    outputRange: [(SCREEN_HEIGHT/2)-(SCREEN_HEIGHT/10), (SCREEN_HEIGHT/2)-(SCREEN_HEIGHT/20), (SCREEN_HEIGHT/2)-(SCREEN_HEIGHT/10)]
  })

        console.log('AARAV---->',dir);

        if(dir === 'right'){
        return (
           
           <Animated.Image
          style={{
          marginLeft,
          opacity,
          height,
          width,
          zIndex:200,
          marginTop: (SCREEN_HEIGHT/2)-(SCREEN_HEIGHT/10),
          backgroundColor: '#00000000'}}
          source={require('../icons/heart.png')} /> 
                    

        )
        }
    }

  render() {
    return (
      <View style={{ flex:1  }}>
                  {this.renderSpinner()}
                  {this.renderCards()}
                  {this.renderHeart()}
      </View>
    );
  }
}

const mapStateToProps= ({ favcards }) => {
      //console.log('JJJJJJ---->'+JSON.stringify(favcards,null,4))
    return { favcards }
}

const styles = {
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH
  }
};

export default connect(mapStateToProps,{addFavCard,loadMoreFlag, getFavCards})(Deck);