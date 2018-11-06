// import { store, defaultState } from '../store';

export default function blindsNamesReducer(currentState, action) {
  const newState = {...currentState}
    switch(action.type){
      case 'GET_ALL_BLINDS_LIST':
        newState.allBlindsNames = action.payload.blindsNames
      break;
      case 'UPDATE_NEW_BLINDS':
        newState.newBlindsName = { ...newState.newBlindsName, ...action.payload }
      break;
      case 'UPDATE_CURRENT_BLINDS':
        newState.selectedBlindsName = { ...newState.selectedBlinsName, ...action.payload }
      break;
      default:
      break;
    }//lend switch
  return newState


}//end blindsNamesReducer
