// import { combineReducers } from "redux";
//import { logoutUser } from '../actions/userActions'

import usersReducer from './usersReducer';
// import playedGamesReducer from './playedGamesReducer';
import notesReducer from './notesReducer';
import gameNamesReducer from './gameNamesReducer';
import blindsNamesReducer from './blindsNamesReducer';
import gameLocationsReducer from './gameLocationsReducer';
import killStatusesReducer from './killStatusesReducer';


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
  newState = killStatusesReducer(newState, action)
  return newState
}

// const rootReducer = (state, action) => {
//   if (action.type === 'LOGOUT_USER'){
//     state = undefined
//   }
//   return appReducer(state, action)
// }

export default rootReducer;

// export function rootReducer(state=defaultState, action) {
//
// }
