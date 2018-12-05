

export function getAllNotes(){
  return dispatch => {
    fetch('http://localhost:3000/api/v1/notes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(payload =>
      dispatch( {type: 'GET_ALL_NOTES', payload: payload } )
    )

  }
}

export function updateNewNote(noteAttributes){
  return ({
    type: 'UPDATE_NEW_NOTE',
    payload: noteAttributes
  })
}
export function updateCurrentNote(noteAttributes){
  return ({
    type: 'UPDATE_CURRENT_NOTE',
    payload: noteAttributes
  })
}
export function logoutNotes(){
  return ({
    type: 'LOGOUT_Notes'
  })
}
