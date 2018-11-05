import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer';

let currentUser;
try {
  currentUser=JSON.parse(localStorage.currentUser)
}catch(err){
  currentUser={
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    read_and_accept_terms_of_service: false,
    played_games: []
  }
}
const defaultState = {
  jwt: localStorage.jwt || false,
  newUser: {
    email: '',
    first_name: '',
    last_name: '',
    password: ''
  },
  currentUser: currentUser,
  userPlayedGames: currentUser.played_games,
  newUserGame: {
    user_id: '',
    start_date_time: '',
    end_date_time: '',
    buy_in: '',
    cash_out: '',
    game_location_id: '',
    game_name_id: '',
    tournament: '',
    profit: '',
    minutes: '',
    won_game: ''
  }
  // //new items to lists persist
  // newGame: {},
  // newBlindsName:'',
  // newGameName: '',
  // newGameLocation:'',
  // newNote:{},
  // // all items lists to select from
  // blindsNames: {},
  // gameNames: {},
  // gameLocations: {},
  // allNotes: {},
  // // selected items from list to add to game
  // selectedGame: {},
  // selectedBlindsName: {},
  // selectedGameName: {},
  // selectedGameLocation: {},
  // selectedNote: {}
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

const store = createStore(rootReducer, enhancer)
export {store};
export { currentUser };
export { defaultState };
