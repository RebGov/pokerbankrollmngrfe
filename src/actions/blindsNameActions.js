
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
export function selectGameBlinds(payload){
  console.log('blindsName ', payload)
  return ({
    type: 'UPDATE_NEW_GAME',
    payload: { blinds_name_id: payload.id }
  })
}
export function setBlindsNameSearch(payload){
  // console.log('GameLocation: ', payload)
  return ({
    type: 'UPDATE_GAME_FILTERS',
    payload: {blinds_name_id: payload.id}
  })
}
// export function addInputBlindsName = () => {
//   this.props.saveSelectBlindsNameValue({blinds_name_attribute:e.target.value})
// }
// removeInput = (index) => {
//   this.props.removeSelectBlindsName(index)
// }

// export function saveSelectBlindsNameValue = (e, id) => {
//  let data = {}
//  data.id = id;
//  data.value = e.target.value
//
//  this.props.saveSelectBlindsNameValue(data)
// }
// export function renderSelectBlindsNames = (selection, index) => {
//   const selectedValue = selection.value || '';
//   const id = selection.id;
// }
