// import { store, defaultState } from '../store';

export default function blindsNamesReducer(currentState, action) {
  const newState = {...currentState}
    switch(action.type){
      case 'GET_ALL_BLINDS_LIST':
        newState.allBlindsNames = action.payload.blindsNames
      break;
      case 'UPDATE_NEW_BLINDS_NAME':
        newState.newBlindsName = { ...newState.newBlindsName, ...action.payload }
      break;
      case 'UPDATE_CURRENT_BLINDS':
        newState.selectedBlindsName = { ...newState.selectedBlindsName, ...action.payload }
      break;
      case 'SELECT_BLINDS_NAME_LOCATION':
      newState.selectedBlindsName = { ...newState.selectedBlindsName, ...action.payload }
      break;
      // case 'ADD_NEW_BLINDS_NAME_SELECT':
      //   return {
      //     ...state,
      //     selections: [].concat(state.selections, action.data),
      //   }
      // case 'REMOVE_SELECT_BLINDS_NAME':
      //   return {
      //     ...state,
      //     selections: state.selections.filter((selection, index) => (index !== action.data)),
      //   }
      // case 'SAVE_SELECT_BLINDS_NAME_OPTION':
      //   return {
      //     ...state,
      //     selections: state.selections.map((selection) => selection.id === action.data.id ? action.data : selection)
      //   }
      // break;
      default:

      break;
    }//lend switch
  return newState


}//end blindsNamesReducer

// function blablah(state = { selections: [] } , action = {}){
