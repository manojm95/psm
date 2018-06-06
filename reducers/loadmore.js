const LMF = 'loadMoreFlag';

export default function(state = false, action) {
  switch (action.type) {
    case LMF:
      return action.payload;
    default:
      return state;
  }
}