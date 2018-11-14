//UserActions these are sent to reducers
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
export function getUserProfile(jwt){
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      }
    })
    .then(resp => resp.json())
    .then(payload =>
      // if(!payload.error){
        dispatch( { type: 'GET_USER_PROFILE', payload: payload } )
      // }
    )
  }
}
export function getUserGameData(payload){
  const params_list = ['game_location_id', 'game_name_id', 'blinds_name_id', 'kill_status_id']
  let addUrlString = ``
  if (payload !== undefined){
    let filters = {}
    filters = payload
    let no_search_params = true
    // console.log("****", filters)
      for (let [key, value] of Object.entries(filters)){
        console.log(filters, key, value)
        if (params_list.includes(key) &&  value!== ""){
          no_search_params = false
          console.log("no search",no_search_params)
          addUrlString+=`&${key}=${value}`
        }
      }
    } else {
  }
  console.log("addUrlString:", addUrlString)
  return dispatch => {
    let base_url=`http://localhost:3000/api/v1/played_games?user_id=${localStorage.user_id}`
     // Code to fill in search parms
    fetch(base_url+addUrlString, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        // ,
        // 'Authorization': `Bearer ${localStorage.jwt}`
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

export function selectOneGame(gameId, history){
  console.log("***", gameId, history)

  return dispatch => {
    fetch(`http://localhost:3000/api/v1/played_games/${gameId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(payload =>
      // if(!payload.error){
        dispatch( { type: 'SELECTED_GAME', payload: payload } )
      // }
    )
    // .then(console.log(payload))
     .then(history.push(`/${localStorage.user_id}/CurrentGame`))

  }

}
export function updateNewGame(gameAttributes){
  return ({
    type: 'UPDATE_NEW_GAME',
    payload: gameAttributes
  })
}
export function updateGameFilters(gameAttributes){
  return({
    type: 'UPDATE_GAME_FILTER',
    payload: gameAttributes
  })
}
export function createNewGame(e, history){
  return ({
    type: 'CREATE_NEW_GAME',
    history: history
  })
}
export function logoutUser(){
  return ({
    type: 'LOGOUT_USER'
  })
}
