import { createStore } from 'redux';
import {reducer} from './reducer';

let currentUser;
try {
  currentUser=JSON.parse(localStorage.currentUser)
}catch(err){
  currentUser={
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    playedGames: {}
  }
}
const defaultState = {
  jwt: localStorage.jwt || false,
  newUser: {
    email: '',
    username: '',
    firstName: '',
    last_name: '',
    password: ''
  },
  currentUser: currentUser
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



const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export {store};

export {currentUser};
export {defaultState};
