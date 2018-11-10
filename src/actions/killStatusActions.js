

export function getAllKillStatusList(){
  return dispatch => {
    fetch('http://localhost:3000/api/v1/kill_statuses', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(payload =>
      dispatch( {type: 'GET_ALL_KILL_STATUS_LIST', payload: payload } )
    )

  }
}

export function updateNewKillStatus(killStatusAttributes){
  return ({
    type: 'UPDATE_NEW_KILL_STATUS',
    payload: killStatusAttributes
  })
}
export function updateCurrentKillStatus(killStatusAttributes){
  return ({
    type: 'UPDATE_CURRENT_KILL_STATUS',
    payload: killStatusAttributes
  })
}

export function selectKillStatus(payload){

  return ({
    type: 'UPDATE_NEW_GAME',
    payload: { kill_status_id: payload.id }
  })
}
