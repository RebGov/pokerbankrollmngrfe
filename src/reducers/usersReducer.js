import {store } from '../store';

export default function usersReducer(currentState, action) {
  // console.log(store, defaultState)
  let newState = {...currentState}
    switch(action.type){
  case 'UPDATE_NEW_USER':
    newState.newUser = { ...newState.newUser, ...action.payload }
  break;
  case 'UPDATE_CURRENT_USER':
    newState.currentUser = { ...newState.currentUser, ...action.payload }
  break;
  case 'CREATE_NEW_USER':
  //fetch post to users
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newState.newUser)
      })
      .then( resp => resp.json())
      .then( payload => {
        if(!payload.error){
        store.dispatch({ type: 'LOGIN_NEW_USER', payload: payload})
      } else {
        store.dispatch({ type: 'DISPLAY_ERROR', payload: payload})
      }
    })
  break;
  case 'ATTEMPT_TO_LOGIN_USER':
  // fetch auth(login)
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newState.currentUser)
      })
      .then( resp => resp.json())
      .then( payload => {
        if(!payload.error){
          store.dispatch({ type: 'LOGIN_USER', payload: payload})
        } else {
          store.dispatch({ type: 'DISPLAY_ERROR', payload: payload})
        }
      })
  break;
  case 'GET_USER_GAME_DATA':
    newState.currentUser = { ...newState.currentUser, ...action.payload }
    //localStorage.setItem('currentUser', JSON.stringify(newState.currentUser))
  break;
  case 'LOGIN_USER':
    newState.currentUser = action.payload.user
    newState.jwt = action.payload.jwt
    localStorage.setItem('jwt', newState.jwt)
    //change userLoggedIn = true
    // localStorage.setItem('currentUser', JSON.stringify(newState.currentUser))
  break;
  case 'LOGIN_NEW_USER':
    newState.currentUser = action.payload.user
    newState.jwt = action.payload.jwt
    localStorage.setItem('jwt', newState.jwt)
    // localStorage.setItem('currentUser', JSON.stringify(newState.currentUser))

  break;
  case 'UPDATE_NEW_GAME':
    newState.newUserGame = {...newState.newUserGame, ...action.payload }
  break;
  case 'CREATE_NEW_GAME':
    newState.newUserGame.user_id = newState.currentUser.id
    // newState.newUserGame.profit = newState.newUserGame.buy_in - newState.newUserGame.cash_out
    if (newState.newUserGame.start_date_time < newState.newUserGame.end_date_time) {
    fetch('http://localhost:3000/api/v1/played_game/new', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'

      },
      body: JSON.stringify(newState.newUserGame)
      })
      .then( resp => resp.json())
      .then( payload => {
        if(!payload.error){
        store.dispatch({ type: 'GET_USER_GAME_DATA', payload: payload})
      } else {
        store.dispatch({ type: 'DISPLAY_ERROR', payload: payload})
      }
    })
  } else {
    console.log("End time must be after start time.")
  }


  break;
  case 'DISPLAY_ERROR':
  newState.displayError = action.payload
  break;
  case 'LOGOUT_USER':

    localStorage.clear()
    newState.jwt=false


    //clear out all state
    //redirect to home page

    break;
  default:

  break;
  }//end switch
  return newState
}
