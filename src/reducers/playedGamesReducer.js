// import { store, defaultState } from '../store';

export default function playedGamesReducer(currentState, action) {
  const newState = {...currentState}
  switch(action.type){
    case 'SORT_BY_PROFIT':
    break;
    case 'DOLLAR_PER_HOUR'
    break;
    case 'PERCENTAGE_OF_WINS':
    break;
    case 'PERCENTAGE_OF_LOSSES':
    break;
    case 'AVG_WIN':
    break;
    case 'AVE_LOSS':
    break;
    default:
    break;
  }
  return newState
}
