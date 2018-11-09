// import { store, defaultState } from '../store';

export default function gameLocationReducer(currentState, action) {
  const newState = {...currentState}
    switch(action.type){
      case 'GET_ALL_LOCATIONS_LIST':
        newState.allGameLocations = action.payload.gameLocations 
      break;
      case 'UPDATE_NEW_LOCATIONS':
        newState.newGameLocation = { ...newState.newGameLocation, ...action.payload }
      break;
      case 'UPDATE_CURRENT_LOCATION':
        newState.selectedGameLocation = { ...newState.selectedGameLocation, ...action.payload }
      break;
      case 'SELECT_GAME_LOCATION':
        newState.selectGameLocation = {
          ...newState.selectedGameLocation, ...action.payload
        }
      break;
      default:
      break;
    }//lend switch
  return newState


}//end gameLocationsReducer
