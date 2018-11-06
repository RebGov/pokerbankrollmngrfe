
//edit this to notes info
import { store, defaultState } from '../store';

export default function notesReducer(currentState=defaultState, action) {
  const newState = {...currentState}
    switch(action.type){
      case 'GET_ALL_NOTES':
        newState.allNotes = action.payload.notes
      break;
      case 'UPDATE_NEW_NOTE':
        newState.newNote = { ...newState.newNote, ...action.payload.note }
      break;
      case 'UPDATE_CURRENT_NOTE':
        newState.selectedNote = { ...newState.selectedNote, ...action.payload.note }
      break;
      default:
      break;
    }//lend switch
  return newState


}//end notesReducer
