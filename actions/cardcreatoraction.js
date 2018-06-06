import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
import axios from 'axios';

const GC = 'getCard';
const AFC = 'addFavCard';
const LMF = 'loadMoreFlag';


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

export const getFavCards = (favCards) => {
    return ({
        type: GC,
        payload: favCards
    }
    )
}

export const loadMoreFlag = (fl) => {
    return ({
        type: LMF,
        payload: fl
    }
    )
}

  