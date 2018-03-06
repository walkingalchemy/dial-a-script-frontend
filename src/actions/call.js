import adapter from '../adapter'

export function createCall(callInputs) {
  return (dispatch) => {
    return adapter.eventHandlers.createCall(callInputs)
    .then(callData => {
      dispatch(setCurrentCall(callData))
    })
  }
}


export function setCurrentCall(callData) {
  return {
    type: "SET_CURRENT_CALL",
    payload: callData
  }
}
