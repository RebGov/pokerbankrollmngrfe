// import { store, defaultState } from '../store';

export default function killStatusesReducer(currentState, action) {
  const newState = {...currentState}
    switch(action.type){
      case 'GET_ALL_KILL_STATUS_LIST':
        newState.allKillStatuses = action.payload.killStatuses
      break;
      case 'UPDATE_NEW_KILL_STATUS':
        newState.updateNewKillStatus = { ...newState.updateNewKillStatus, ...action.payload }
      break;
      case 'UPDATE_CURRENT_KILL_STATUS':
        newState.selectedKillStatus = { ...newState.selectedKillStatus, ...action.payload }
      break;
      case 'SELECT_GAME_NAME':
        newState.selectGameName = {
          ...newState.selectedGameName, ...action.payload
        }
      break;
      default:
      break;
    }//lend switch
  return newState


}//end gameNamesReducer
