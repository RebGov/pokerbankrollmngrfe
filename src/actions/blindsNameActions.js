
export function getAllBlindsList(){
  return dispatch => {
    fetch('http://localhost:3000/api/v1/blinds_names', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(payload =>
      dispatch( {type: 'GET_ALL_BLINDS_LIST', payload: payload } )
    )

  }
}

export function updateNewBlinds(blindsAttributes){
  return ({
    type: 'UPDATE_NEW_BLINDS',
    payload: blindsAttributes
  })
}
export function updateCurrentBlinds(blindsAttributes){
  return ({
    type: 'UPDATE_CURRENT_BLIND',
    payload: blindsAttributes
  })
}
