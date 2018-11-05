import { store, defaultState } from '../store';

export default function playedGamesReducer(currentState=defaultState, action) {
  const newState = {...currentState}
  return newState
}
