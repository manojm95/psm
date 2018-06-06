import { REHYDRATE } from 'redux-persist/constants';
import _ from 'lodash';


//const RFC = 'returnFavCard';
const AFC = 'addFavCard';


export default function(state = [], action) {
  switch (action.type) {
    case REHYDRATE:
      return action.payload.favcards || [];
    case AFC:
      console.log('LLLLLL'+JSON.stringify(state,null,4))
      return _.uniqBy([
            action.payload, ...state],'id');
    default:
      return state;
  }
}