import {store, defaultState } from '../store';

export default function usersReducer(currentState=defaultState, action) {
  // console.log(store, defaultState)
  const newState = {...currentState}
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
      .then( payload => store.dispatch({ type: 'LOGIN_NEW_USER', payload: payload}) )
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
      .then( payload => store.dispatch({ type: 'LOGIN_USER', payload: payload}) )
  break;
  case 'GET_USER_GAME_DATA':
    newState.currentUser = action.payload
    localStorage.setItem('currentUser', JSON.stringify(newState.currentUser))
  break;
  case 'LOGIN_USER':
    // newState.currentUser = action.payload.user
    newState.jwt = action.payload.jwt
    localStorage.setItem('jwt', newState.jwt)
    // localStorage.setItem('currentUser', JSON.stringify(newState.currentUser))
  break;
  case 'LOGIN_NEW_USER':
    newState.currentUser = action.payload.user
    newState.jwt = action.payload.jwt
    localStorage.setItem('jwt', newState.jwt)
    localStorage.setItem('currentUser', JSON.stringify(newState.currentUser))
  break;
  case 'LOGOUT_USER':
    localStorage.clear()
    newState.currentUser = '';
    newState.jwt = false

    break;
  default:

  break;
  }//end switch
  return newState
}
