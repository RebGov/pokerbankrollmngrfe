
export function getAllLocationsList(){
  return dispatch => {
    fetch('http://localhost:3000/api/v1/game_locations', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(payload =>
      dispatch( {type: 'GET_ALL_LOCATIONS_LIST', payload: payload } )
    )

  }
}

export function updateNewLocations(locationAttributes){
  return ({
    type: 'UPDATE_NEW_LOCATIONS',
    payload: locationAttributes
  })
}
export function updateCurrentLocation(locationAttributes){
  return ({
    type: 'UPDATE_CURRENT_LOCATION',
    payload: locationAttributes
  })
}
