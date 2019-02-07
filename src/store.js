import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer';
import { getUserGameData } from './actions/userActions';
import { getAllBlindsList } from './actions/blindsNameActions';
import { getAllLocationsList} from './actions/gameLocationActions';
import { getAllGameNamesList } from './actions/gameNameActions';
import { getAllNotes } from './actions/noteActions';
import { getAllKillStatusList } from './actions/killStatusActions';
import { getUserProfile } from './actions/userActions';

let currentUser;
try {
  currentUser=JSON.parse(localStorage.currentUser)
}catch(err){
  currentUser={
    id:'',
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    read_and_accept_terms_of_service: false
  }
}
//default state should only be inside of individual reducer applicable to that one only.
const defaultState = {
  jwt: localStorage.jwt || false,
  user_id: localStorage.user_id,
  // isLoggedIn: false,
  // poker_room: localStorage.poker_room,
  // userSignedin: false,
  displayError: {},
  newUser: {
    email: '',
    first_name: '',
    last_name: '',
    read_and_accept_terms_of_service: false,
    password: ''
  },
  currentUser: currentUser,
  userPlayedGames: [],
  isLoading: true,
  // isChartLoaded: false,

  newUserGame: {
    user_id: '',
    start_date_time: new Date(),
    end_date_time: new Date(),
    buy_in: '',
    cash_out: '',
    blinds_name_id: '',
    kill_status_id: 1,
    game_location_id: '',
    game_name_id: '',
    tournament: false
  },
  selectedGame: {
    playedGame:{
      game_location:{},
      blinds_name:{},
      game_name:{},
      kill_status:{},
      notes:{}
    }
  },
  selectedGameEmpty: true,

  gameFilters: {
    blinds_name_id: '',
    kill_status_id: '',
    game_location_id: '',
    game_name_id: '',
    start_date: '',
    end_date: ''
  },
  gameSorts: {
    sortByProft: false,
    sortByPlayTime: false,
  },
  statisticsInfo:{
    avgWin: '',
    avgLoss: '',
    dollarPerHr:'',
    percentWins: '',
    percentLosses:''
  },

  newBlindsName:'',
  allBlindsNames: [],
  selectedBlindsName: [],

  newGameName: '',
  allGameNames:[],
  selectedGameName: [],

  newNote:'',
  allNotes: {},
  selectedNote: [],

  newGameLocation:'',
  allGameLocations: [],
  selectedGameLocation: [],
  setGameLocationSearch: [],

  newKillStatus:'',
  allKillStatuses: [],
  selectedKillStatus: [],

}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

const store = createStore(rootReducer, defaultState, enhancer)
// console.log("&&&&", defaultState)
if (defaultState.jwt!=="undefined" && defaultState.jwt!== false) {
  store.dispatch(getUserProfile(defaultState.jwt))
  store.dispatch(getAllNotes())
  store.dispatch(getAllGameNamesList())
  store.dispatch(getAllBlindsList())
  store.dispatch(getAllLocationsList())
  store.dispatch(getAllKillStatusList())
  store.dispatch(getUserGameData())

} else {
  console.log("not yet loaded")
}

// if (defaultState.currentUser.id !== "undefined") {
//   debugger
//   store.dispatch(getUserGameData(this.props.currentUser.id))
// } else {
//   console.log("not yet loaded")
// }

export {store, currentUser, defaultState };
