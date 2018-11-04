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
    // case 'GET_USER_GAME_DATA':
    //  newState.jwt = action.payload.jwt
    //  localStorage.setItem('jwt', JSON.stringify(newState.jwt))
    //     // const jwt = localStorage.jwt
    //     // if(jwt){
    //     fetch('http://localhost:300/api/v1/profile', {
    //       method: 'GET',
    //       headers: {
    //         Authorization: `Bearer ${newState.jwt}`
    //       }
    //     })
    //       .then(resp => resp.json())
    //       .then(payload =>
    //         // if(!payload.error){
    //           store.dispatch({ type: 'LOGIN_USER', payload: payload}))
    //         // }
    //    // }
    // break;
    // case 'JWT_TOKEN':
    //   // newState.currentUser = action.payload.user
    //
    //   // localStorage.setItem('currentUser', JSON.stringify(newState.currentUser))
    //
    //   store.dispatch({type: 'GET_USER_PROFILE_AND_GAME_DATA', payload: newState.jwt})
    //   //notes change items in backend to = user/jwt
    // break;
    case 'LOGIN_USER':
    newState.currentUser = action.payload.user
    newState.jwt = action.payload.jwt
    localStorage.setItem('currentUser', JSON.stringify(newState.currentUser))
    localStorage.setItem('jwt', JSON.stringify(newState.jwt))

    break;
    default:
  
    break;
   }//end switch
  return newState
}//end reducer

export {reducer};
