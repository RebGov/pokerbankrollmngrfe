import { store, defaultState } from '../store';

export default function notesReducer(currentState=defaultState, action) {
  const newState = {...currentState}
  return newState

}
