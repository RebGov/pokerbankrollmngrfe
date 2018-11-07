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
//default state should only be inside of individual reducer applicable to that one only.
const defaultState = {
  jwt: localStorage.jwt || false,
  // userSignedin: false,
  newUser: {
    email: '',
    first_name: '',
    last_name: '',
    read_and_accept_terms_of_service: false,
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
  },
  //newGame: {},
  //selectedGame: {},

  newBlindsName:'',
  allBlindsNames: {},
  selectedBlindsName: {},

  newGameName: '',
  allGameNames: {},
  selectedGameName: {},

  newNote:'',
  allNotes: {},
  selectedNote: [],

  newGameLocation:'',
  allGameLocations: {},
  selectedGameLocation: {}
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

const store = createStore(rootReducer, defaultState, enhancer)
export {store};
export { currentUser };
export { defaultState };
