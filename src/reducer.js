import {defaultState} from './store'
// import {currentUser} from './store'
import {store} from './store'

const reducer = (currentState = defaultState, action) => {
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
        .then( payload => store.dispatch({ type: 'LOGIN_USER', payload: payload}) )
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
      newState.currentUser = action.payload.user
      localStorage.setItem('currentUser', JSON.stringify(newState.currentUser))
    break;
    case 'LOGIN_USER':
      // newState.currentUser = action.payload.user
      newState.jwt = action.payload.jwt
      localStorage.setItem('jwt', JSON.stringify(newState.jwt))
    break;
    default:

    break;
   }//end switch
  return newState
}//end reducer

export {reducer};
