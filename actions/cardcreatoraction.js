import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
import axios from 'axios';

const GC = 'getCard';
const AFC = 'addFavCard';
const LMF = 'loadMoreFlag';
const FCSF = 'favCardsSetFlag';
const DUMMY = 'dummy';



export const getCards = (link,callback) =>  async dispatch => {
    console.log('GETTT CARDSSSSS ACTION CREATOR');
    try {
        let response = await axios.get(link);
        let { data } = response;
        if(data) {
            console.log('GETTT CARDSSSSS ACTION CREATOR data--->'+JSON.stringify(data,null,4));
         dispatch({ type: GC, payload: data });
         callback();
        }
    } catch(e)
    {
        console.log(e);
    }
}

export const addFavCard = (data) => {
    console.log('ADDFAVACTION');
    return ({
        type: AFC,
        payload: data
    }
    )
}

export const getFavCards1 = (favCards) => {
    return ({
        type: GC,
        payload: favCards
    }
    )
}

export const getFavCards = (data,callback) =>  async dispatch => {
    console.log('GETTT CARDSSSSS ACTION CREATOR');
    try {
        let response = await axios.get("https://kuwxlkua52.execute-api.us-east-1.amazonaws.com/dev/psmjson/single?category=Love");
         dispatch({ type: GC, payload: data });
         callback();
        
    } catch(e)
    {
        console.log(e);
    }
}

export const loadMoreFlag = (fl) => {
    return ({
        type: LMF,
        payload: fl
    }
    )
}

export const resetCards = () => {
    console.log('GETTT CARDSSSSS ACTION CREATOR RESETCARDSSS');
    return ({
        type: GC,
        payload: []
    }
    )
}


export const dummyAsync = (callback) =>  async dispatch => {
    console.log('GETTT CARDSSSSS ACTION CREATOR dumyAsync');
    try {
        let response = await axios.get("https://kuwxlkua52.execute-api.us-east-1.amazonaws.com/dev/psmjson/single?category=Love");
         dispatch({ type: DUMMY, payload: null });
         callback();
        
    } catch(e)
    {
        console.log(e);
    }
}

  