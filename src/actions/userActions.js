
export function updateNewUser(userAttributes){
  return ({
    type: 'UPDATE_NEW_USER',
    payload: userAttributes
  })
}
export function updateCurrentUser(userAttributes){
  return ({
    type: 'UPDATE_CURRENT_USER',
    payload: userAttributes
  })
}
export function loginUser(){
   return ({
    type: 'ATTEMPT_TO_LOGIN_USER'
  })
}



export function createUser(){
  return ({
    type: 'CREATE_NEW_USER'
  })
}


export function getUserData(jwt){
  return dispatch => {
    fetch('http://localhost:3000/api/v1/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      }
    })
    .then(resp => resp.json())
    .then(payload =>
      // if(!payload.error){
        dispatch( { type: 'GET_USER_GAME_DATA', payload: payload } )
      // }
    )
  }
}
export function updateNewGame(gameAttributes){
  return ({
    type: 'UPDATE_NEW_GAME',
    payload: gameAttributes
  })
}
export function createNewGame(jwt){
  return ({
    type: 'CREATE_NEW_GAME'
  })
}
export function logoutUser(){
  return ({
    type: 'LOGOUT_USER'
  })
}
