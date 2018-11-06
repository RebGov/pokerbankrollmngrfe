import { combineReducers } from "redux";

import usersReducer from './usersReducer';
import playedGamesReducer from './playedGamesReducer';
import notesReducer from './notesReducer';
import gameNamesReducer from './gameNamesReducer';
import blindsNamesReducer from './blindsNamesReducer';
import gameLocationsReducer from './gameLocationsReducer';


const rootReducer = combineReducers({
  users: usersReducer,
  // played_games: playedGamesReducer,
  notes: notesReducer,
  gameNames: gameNamesReducer,
  blindsNames: blindsNamesReducer,
  gameLocations: gameLocationsReducer
});

export default rootReducer;

// export function rootReducer(state=defaultState, action) {
//
// }
