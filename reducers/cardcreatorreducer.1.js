const INITIAL_STATE = {
  poems: null
};

const GC = 'getCard';


export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GC:
      console.log('GETTT CARDSSSSS ACTION CREATOR reducer--->'+JSON.stringify(action.payload,null,4));
      return ({ ...INITIAL_STATE, poems: action.payload });
    default:
      return state;
  }
}