import { store, defaultState } from '../store';

export default function gameNamesReducer(currentState=defaultState, action) {
  const newState = {...currentState}
    switch(action.type){
      case 'GET_ALL_GAME_NAMES_LIST':
        newState.allGameNames = action.payload.gameNames
      break;
      case 'UPDATE_NEW_GAME_NAME':
        newState.newGameName = { ...newState.newGameName, ...action.payload }
      break;
      case 'UPDATE_CURRENT_GAME_NAME':
        newState.selectedGameName = { ...newState.selectedGameName, ...action.payload }
      break;
      default:
      break;
    }//lend switch
  return newState


}//end gameNamesReducer
