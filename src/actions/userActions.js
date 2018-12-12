//UserActions these are sent to reducers
import moment from 'moment';
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
  const params_list = ['game_location_id', 'game_name_id', 'blinds_name_id', 'kill_status_id', 'start_date', 'end_date']
  let addUrlString = ``
  if (payload !== undefined){
    let filters = {}
    filters = payload
    let no_search_params = true
    // console.log("****", filters)
      for (let [key, value] of Object.entries(filters)){
        // console.log(filters, key, value)
        if (params_list.includes(key) &&  value!== ""){
          no_search_params = false
          // console.log("no search",no_search_params)
          addUrlString+=`&${key}=${value}`
        }
      }
    } else {
  }
  // console.log("addUrlString:", addUrlString)
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
  // console.log("***", gameId, history)
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
export function editForm(e, history){
  return({
    type: 'EDIT_SELECTED_GAME',
    history: history
  })
}
export function logoutUser(){
  return ({
    type: 'LOGOUT_USER'
  })
}
export function clearFilters(){
  return ({
    type:'CLEAR_FILTERS'
  })
}
export function selectStartDateSearch(incomingDate){
  // console.log("startDateI", incomingDate)
  let date = incomingDate.toDate()

  // console.log("StartDate", date)
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  let start_date = date
  start_date = start_date.toISOString()
  // console.log(start_date)

  return({
    type:'UPDATE_GAME_FILTERS',
    payload: {start_date: start_date}
  })
}
export function selectEndDateSearch(incomingDate){
  // console.log("endDateI", incomingDate)
  let date = incomingDate.toDate()

  date.setHours(23)
  date.setMinutes(59)
  date.setSeconds(59)
  let end_date = date
  end_date = end_date.toISOString()
  // end_date = end_date.toJson()
  return({
    type:'UPDATE_GAME_FILTERS',
    payload: {end_date: end_date}
  })
}
export function selectYearDateSearch(e){
  e.preventDefault()
  let date = new Date()
  console.log("Year", date)
  date.setMonth(0)
  date.setDate(1)
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  let start_date = date
  start_date = date.toJSON()
  date = new Date()
  date.setMonth(11)
  date.setDate(31)
  date.setHours(23)
  date.setMinutes(59)
  date.setSeconds(59)

  let end_date = date
  console.log('enddate', end_date)
  end_date = date.toJSON()

  return({
    type:'UPDATE_GAME_FILTERS',
    payload: { start_date: start_date, end_date: end_date}
  })
}

export function selectMonthDateSearch(e){
  e.preventDefault()
  let date = new Date()
  date.setDate(1)
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  let start_date = date
  start_date = date.toJSON()
  date = new Date()
  date.setDate(31)
  date.setHours(23)
  date.setMinutes(59)
  date.setSeconds(59)
  let end_date = date
  end_date = date.toJSON()
  return({
    type:'UPDATE_GAME_FILTERS',
    payload: { start_date: start_date, end_date: end_date}
  })
}
