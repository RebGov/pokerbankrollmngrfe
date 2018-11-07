// import { combineReducers } from "redux";

import usersReducer from './usersReducer';
// import playedGamesReducer from './playedGamesReducer';
import notesReducer from './notesReducer';
import gameNamesReducer from './gameNamesReducer';
import blindsNamesReducer from './blindsNamesReducer';
import gameLocationsReducer from './gameLocationsReducer';


// const rootReducer = combineReducers({
//   users: usersReducer,
//   // played_games: playedGamesReducer,
//   notes: notesReducer,
//   gameNames: gameNamesReducer,
//   blindsNames: blindsNamesReducer,
//   gameLocations: gameLocationsReducer
// });

const rootReducer = (currentState, action) => {
  let newState = { ...currentState }
  newState = usersReducer(newState, action)
  newState = notesReducer(newState, action)
  newState = gameNamesReducer(newState, action)
  newState = blindsNamesReducer(newState, action)
  newState = gameLocationsReducer(newState, action)



  return newState
}

export default rootReducer;

// export function rootReducer(state=defaultState, action) {
//
// }
