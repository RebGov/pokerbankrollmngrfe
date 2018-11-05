
// export function getUsernameValue(e){
//   return ({
//     type: 'GET_USERNAME_VALUE',
//     payload: e.target.value
//   })
// }
// export function getEmailValue(e){
//   return ({
//     type: 'GET_EMAIL_VALUE',
//     payload: e.target.value
//   })
// }
// export function getPasswordValue(e){
//   return ({
//     type: 'GET_PASSWORD_VALUE',
//     payload: e.target.value
//   })
// }
// export function getFirstNameValue(e){
//   return ({
//     type: 'GET_FIRST_NAME_VALUE',
//     payload: e.target.value
//   })
// }
// export function getLastNameValue(e){
//   return ({
//     type: 'GET_LAST_NAME_VALUE',
//     payload: e.target.value
//   })
// }

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

  //seperate out each item being added
  //username, email, password etc.?

export function getUserData(jwt){

  // debugger
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
