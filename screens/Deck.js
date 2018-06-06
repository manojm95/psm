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
  Easing
} from 'react-native';

import { addFavCard, loadMoreFlag } from '../actions/cardcreatoraction';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

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
          this.forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe('left');
        } else {
          this.resetPosition();
        }
      }
    });

    this.state = { panResponder, position, index: 0 };
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

  }

  componentDidMount(){
    console.log('CDMM DECK--->');
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

  componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }

  forceSwipe(direction) {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(this.state.position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION
    }).start(() => this.onSwipeComplete(direction));
  }

  onSwipeComplete(direction) {
    this.animate();
    const { onSwipeLeft, onSwipeRight, data } = this.props;
    const item = data[this.state.index];
    console.log('FLOWCHECK---> 1'+this.state.index);
    if(this.state.index >= this.props.data.length-1)
    {
                this.props.setTopCard(null)
    }
    else 
    {
            console.log('FLOWCHECK---> 1'+JSON.stringify(this.props.data[this.state.index]),null,4);
            this.props.setTopCard(this.props.data[this.state.index + 1])

    }
    //console.log('FLOWCHECK---> 2'+direction);
    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
    this.state.position.setValue({ x: 0, y: 0 });
    this.setState({ index: this.state.index + 1 });

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

  renderCards() {
    console.log("RNMC 1"+this.state.index);
    console.log("RNMC 2"+this.props.data.length);
    if (this.state.index >= this.props.data.length) {
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
       {/*<Animated.View
          key={item.id}
          //FOR CARD DECK STRUCTURE
          style={[styles.cardStyle, { top: 10 * (i - this.state.index), zIndex: 5 }]}
        >*/}
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
        return (
           
           <Animated.View
            style={{ position: 'absolute', flex: 1, left:0,bottom: SCREEN_HEIGHT *(50/100), height:30, width: 30, zIndex: 130 }}
            {...this.state.panResponder.panHandlers}
          >
            <Image 
            style={{ position: 'absolute', left:0,bottom: SCREEN_HEIGHT *(50/100), height:30, width: 30, zIndex: 120 }}
            source={require('../icons/heart.png')}>
            </Image>        
           </Animated.View>
                    

        )
    }

  render() {

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

    return (
      <View style={{ flex:1  }}>
       
                  {this.renderCards()}
      <Animated.Image
        style={{
          marginLeft:(SCREEN_WIDTH/2)-(SCREEN_WIDTH/10),
          opacity,
          height,
          width,
          zIndex:200,
          marginTop: (SCREEN_HEIGHT/2)-(SCREEN_HEIGHT/10),
          backgroundColor: '#00000000'}}
          source={require('../icons/heart.png')} />     

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

export default connect(mapStateToProps,{addFavCard,loadMoreFlag})(Deck);