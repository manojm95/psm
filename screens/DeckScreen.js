import React, { Component } from "react";
import {
  Text,
  View,
  PanResponder,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  Platform
} from "react-native";
import { connect } from "react-redux";
import { Card } from "react-native-elements";
import { Button as b1 } from "react-native-elements";
import axios from "axios";
import Deck from "./Deck";
import Header from "./HeaderComponent";
import PoemDetailModal from "./PoemDetailModal";
import { Button, Icon, ImageBackground } from "@shoutem/ui";
import Spinner from "react-native-loading-spinner-overlay";
import { addFavCard, loadMoreFlag } from "../actions/cardcreatoraction";

let direction = '';

const DATA = [
  {
    text: "Image0",
    image: "https://s3.amazonaws.com/rntestbucket-manojm95/psm.jpg",
    id: 0
  },
  {
    text: "Image1",
    image: "https://s3.amazonaws.com/rntestbucket-manojm95/psm1.jpg",
    id: 1
  },
  {
    text: "Image2",
    image: "https://s3.amazonaws.com/rntestbucket-manojm95/psm2.jpg",
    id: 2
  },
  {
    text: "Image3",
    image: "https://s3.amazonaws.com/rntestbucket-manojm95/psm3.jpg",
    id: 3
  },
  {
    text: "Image4",
    image: "http://via.placeholder.com/350x350/00ffff/ffffff/",
    id: 4
  },
  {
    text: "Image4",
    image: "https://s3.amazonaws.com/rntestbucket-manojm95/psm4.jpg",
    id: 5
  }
];

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

class DeckScreen extends Component {
  constructor(props) {
    super(props);
    console.log("constructor--->" + JSON.stringify(this.props.card1, null, 4));
    this.state = {
      selectedCard: null,
      cards: null,
      visible: true,
      topCard: null,
      favCardsrehitflag: false,
      error: false
    };

    this.onNoMoreCardClick = this.onNoMoreCardClick.bind(this);
  }

  static navigationOptions = {
    drawerLabel: "Poem"
  };

  componentDidCatch(err, info) {
      this.setState({ error: true });
  }

  componentDidCatch(err, info) {
    console.log("cwmmmmmm--->");
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    console.log("cwmmmmmm--->" + JSON.stringify(this.props.card1, null, 4));
    this.setState({ topCard: this.props.card1[0], cards: this.props.card1 });
    // axios.get('https://kuwxlkua52.execute-api.us-east-1.amazonaws.com/dev/psmjson/single')
    // .then(response =>
    // {
    //     console.log('KOOOOO--->'+response);
    // }
    // );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "SCUPPPPP--->" + nextProps.loadmore + "<------>" + this.props.loadmore
    );
    if (nextProps.loadmore !== this.props.loadmore) {
      return false;
    } else
      // else if (nextProps.loadmore === true && this.props.loadmore===true)
      // {
      //     return false;
      // }
      return true;
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      "cwrppppppnextprops--->" + JSON.stringify(nextProps.card1, null, 4)
    );
    this.setState({ topCard: nextProps.card1[0], cards: nextProps.card1 });
    //setTimeout(() => {this.setState({visible: !this.state.visible})}, 3000)

    //this.setState({topCard: this.props.card1[0], cards: this.props.card1 });
    // function() {
    //     console.log( 'this.state ::: ' + JSON.stringify( this.state ) );
    //     this.forceUpdate();
    // });
    console.log("cwrpppppp0--->" + JSON.stringify(this.state.card1, null, 4));
    console.log(
      "cwrpppppp1--->" + JSON.stringify(this.state.selectedCard, null, 4)
    );
    console.log("cwrpppppp2--->" + JSON.stringify(this.state.cards, null, 4));
    console.log("cwrpppppp3--->" + JSON.stringify(this.state.topCard, null, 4));
        if((this.props.card1 === this.props.favcards) && (nextProps.card1 === this.props.favcards)){
                            console.log("TTTTTTTTTTTTTESSSSSTTTTTT111111DECKSCREEN");
                this.setState({ favCardsrehitflag: true });
        }
    // axios.get('https://api.jsonbin.io/b/5aca97bd4ba8d82b4ccc38cb/3')
    // .then(response =>
    // {
    //     this.setState({ cards: response.data, topCard: response.data[0] })
    //     response.data.map((d)=> {
    //         //console.log(`The artist is ${d.artist} and url is ${d.url}`)
    //     })
    // }
    // );
  }

  componentDidMount() {
    // setInterval(() => {
    //     this.setState({
    //     visible: !this.state.visible
    //     });
    // }, 3000);
    setTimeout(() => {
      this.setState({ visible: !this.state.visible });
    }, 3000);
    console.log("cdmmmmmmm--->" + JSON.stringify(this.props.card1, null, 4));
  }

  // state = {
  //     selectedCard : null,
  //     cards: null,
  //     topCard: null
  // }

  triggerModal() {
    console.log("mmmmmmmmm" + id);
    //this.setState({ selectCard: 1})
  }

  renderCard = item => {
    return (
      <View style={{ flex: 1 }}>
        <View
          key={item.text}
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0)" }}
        >
          <Image
            style={{
              resizeMode: "cover",
              borderRadius: 20,
              height: SCREEN_HEIGHT * (85 / 100),
              width: SCREEN_WIDTH - 20,
              marginRight: 10,
              marginLeft: 10,
              backgroundColor: "rgba(0,0,0,0)"
            }}
            source={{ uri: item.image }}
          />
        </View>
      </View>
    );
  };

  renderNoMoreCard = () => {
             console.log("NHNHNH101010");
               const { buttonStyle, textStyle } = styles;
    return (
      <View style={{ flex: 1, height: SCREEN_HEIGHT, justifyContent: 'center', alignItems: 'center', width: SCREEN_WIDTH, marginBottom: 100 }}>
        <Image
            style={{
              height: 200,
              width: 200,marginBottom: SCREEN_HEIGHT * (2/10) , marginTop: SCREEN_HEIGHT * (2/10)
            }}
            source={require("../icons/loadmore.gif")}
          />
            <TouchableOpacity style={buttonStyle} onPress={this.onNoMoreCardClick}>
      <Text style={textStyle}>Load More</Text>
    </TouchableOpacity>

      </View>
    );
  };

  onNoMoreCardClick = () => {
    this.props.navigation.navigate("Map");
  };

  triggerModal = () => {
    console.log("mmmmmmmmm" + id);
    //this.setState({ selectCard: 1})
  };

  renderButtons() {
    if (this.state.topCard)
      return (
        <View
          style={{
            height: SCREEN_WIDTH * (20 / 100),
            flexDirection: "row",
            marginTop: SCREEN_HEIGHT * (50 / 100)
          }}
        >
          {" "}
          <Button
            icon={{ name: "code" }}
            backgroundColor="#000000"
            title="View Now"
            style={{ width: SCREEN_WIDTH / 2 - 10 }}
            onPress={() => {
              this.setState({ selectedCard: 1 });
              //console.log(this.state)
            }}
          />
          <Button
            icon={{ name: "code" }}
            backgroundColor="#000000"
            title="View Now"
            style={{ width: SCREEN_WIDTH / 2 - 10 }}
          />
        </View>
      );
  }

  renderModalButton1() {
    if (this.state.topCard)
      return (
        <View
          style={{
            position: "absolute",
            flex: 1,
            bottom: 0,
            zIndex: 100,
            left: 0,
            height: SCREEN_HEIGHT * ( 3 / 20),
            width: SCREEN_WIDTH - 40,
            marginRight: 20,
            marginLeft: 20,
            marginBottom: 50,
            borderRadius: 10,
            backgroundColor: "rgba(255,255,255,1)"
          }}
        >
        <Text style={{ marginTop: 35, marginLeft: 20, marginRight: 20 }}>{this.state.topCard.text}</Text>
        </View>
      );
  }

  renderModalButton2() {
    if (this.state.topCard)
      return (
        <View
          style={
            Platform.OS === "android" ? styles.styleAndroid : styles.styleIos
          }
        >
          <TouchableOpacity
            style={{ height: 65, width: 65, zIndex: 300 }}
            onPress={() => {
              this.setState({ selectedCard: 1 });
              //console.log(this.state)
            }}
          >
            <Image
              style={{ height: 65, width: 65, zIndex: 300 }}
              source={require("../icons/hexicon.png")}
            />
          </TouchableOpacity>
        </View>
      );
  }

  renderData() {
    //console.log("Modal Test ---> 2"+this.state.cards);

    if (this.state.cards) {
      return (
        <View style={{ flex: 1 }}>
          <Deck
            {...this.props}
            data={this.state.cards}
            loadmore={this.props.loadmore}
            renderCard={this.renderCard}
            renderNoMoreCards={this.renderNoMoreCard}
            renderHeart={this.renderHeart}
            setTopCard={this.setTopCard}
            favCardsrehitflag={this.state.favCardsrehitflag}
            
            onSwipeRight={job => this.props.addFavCard(job)}
          />
          {this.renderModalButton1()}
          {this.renderModalButton2()}
        </View>
      );
    }
    return (
      <View>
        <Text>Loading....</Text>
      </View>
    );
  }

  // renderandroidios(){
  //     if
  // }

  showModal() {
    console.log("Modal Test ---> 2" + this.state.selectedCard);
    //if(this.state.selectedCard) {
    return (
      <PoemDetailModal
        data={this.state.topCard}
        sc={this.state.selectedCard}
        onPress={this.closeModal}
      />
    );
    //}
  }

  closeModal = () => {
    //console.log("Modal Test ---> 1");
    this.setState({ selectedCard: null });
  };

  setTopCard = item => {
    this.setState({ topCard: item });
    //console.log('hghghg'+this.state.topCard.image)
  };

  renderSpinner() {
    return (
      <View style={{ zIndex: 500 }}>
        <Spinner
          visible={this.state.visible}
          textContent={"Loading..."}
          textStyle={{ color: "#FFF" }}
          overlayColor="rgba(0, 0, 0, 0.9)"
        />
      </View>
    );
  }

  render() {
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    console.log(
      "Deckscreen--->" + JSON.stringify(this.props.navigation.state, null, 4)
    );

    if(this.state.error)
    {
      console.log("ERORRRRRRRRRRRRRRRRRRRRRRR");
      return (
          <View style={{ flex: 1, height: SCREEN_HEIGHT * (85 / 100) }}>
        <ImageBackground
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: SCREEN_HEIGHT * (85 / 100)
          }}
          source={{
            uri: "https://s3.amazonaws.com/testbucketmanojm95/background.JPG"
          }}
        >
          <Button
            onPress={() => {
              this.props.navigation.navigate("Map");
              this.props.loadMoreFlag(true);
            }}
            styleName="clear"
            style={{
              backgroundColor: "#00000000",
              marginTop: 10,
              marginBottom: 10
            }}
          >
            <Icon name="cart" />
            <Text>CLAIM COUPON</Text>
          </Button>
          <Button
            styleName="clear"
            style={{
              backgroundColor: "#00000000",
              marginTop: 10,
              marginBottom: 10
            }}
          >
            <Icon name="cart" />
            <Text>CLAIM COUPON</Text>
          </Button>
          <Button
            styleName="clear"
            style={{
              backgroundColor: "#00000000",
              marginTop: 10,
              marginBottom: 10
            }}
          >
            <Icon name="cart" />
            <Text>CLAIM COUPON</Text>
          </Button>
          <Button
            styleName="clear"
            style={{
              backgroundColor: "#00000000",
              marginTop: 10,
              marginBottom: 10
            }}
          >
            <Icon name="cart" />
            <Text>CLAIM COUPON</Text>
          </Button>
          <Button
            styleName="clear"
            style={{
              backgroundColor: "#00000000",
              marginTop: 10,
              marginBottom: 10
            }}
          >
            <Icon name="cart" />
            <Text>CLAIM COUPON</Text>
          </Button>
          <Button
            styleName="clear"
            style={{
              backgroundColor: "#00000000",
              marginTop: 10,
              marginBottom: 10
            }}
          >
            <Icon name="cart" />
            <Text>CLAIM COUPON</Text>
          </Button>
        </ImageBackground>
      </View>
      );
    }
    else {

    return (
      <View style={styles.container}>
        {/*{this.renderSpinner()}*/}
        {this.showModal()}
        <Header head="Poem" {...this.props} />
        {this.renderData()}
      </View>
    );
  }
  }
}

const mapStatetoProps = ({ cards, favcards, loadmore }) => {
  //console.log('kkkkkkk---->'+JSON.stringify(cards,null,4))
  console.log("LOAdMORE---->" + JSON.stringify(loadmore, null, 4));
  let g = Math.floor(Math.random() * 1000) + 1;
  //Adding the random number to props for the scenario of clicking the same items again and again in Mapscreen. i.e clicking
  //favorites two two will not trigger compwillreceiveprops the sec time as the props will be same that is passed from here.
  let { poems } = cards;
  console.log("FAVCARDS--->" + JSON.stringify(poems, null, 4));
  return {
    card1: poems,
    rn: g,
    loadmore,
    favcards
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  styleAndroid: {
    position: "absolute",
    flex: 1,
    bottom: 0,
    right: 0,
    height: SCREEN_HEIGHT * (5 / 100),
    marginRight: 30,
    marginBottom: 40 + SCREEN_HEIGHT * (3 / 20)
  },
  styleIos: {
    position: "absolute",
    flex: 1,
    zIndex: 200,
    bottom: 0,
    right: 0,
    height: SCREEN_HEIGHT * (5 / 100),
    marginRight: 30,
    marginBottom: 40 + SCREEN_HEIGHT * (3 / 20)
  },
  textStyle: {
    color: '#707B7C',
    fontSize: 16,
    paddingLeft: 20,
    justifyContent: 'center',
alignItems: 'center' 
    },
  buttonStyle: {
    height: 30,
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0)",
    marginLeft: SCREEN_WIDTH*(3/10),
    marginRight: SCREEN_WIDTH*(3/10),
    borderRadius: 2,
  justifyContent: 'center',
alignItems: 'center'  }
});

export default connect(mapStatetoProps, { addFavCard, loadMoreFlag })(
  DeckScreen
);

  // if(nextProps.favCardsrehitflag && ((nextProps.data.length) == this.state.index )){
    //         //favCardsrehit = true;
    //         console.log("TTTTTTTTTTTTTESSSSSTTTTTT99999999");
    //         this.setState({ index: 0 });
    //         //this.props.favCardssetFlag(false);
    //               //this.props.loadMoreFlag(false);
    // }