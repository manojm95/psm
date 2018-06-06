import { combineReducers } from 'redux';
import cards from './cardcreatorreducer';
import favcards from './favcards';
import loadmore from './loadmore';


export default combineReducers({
    cards,
    favcards,
    loadmore
});