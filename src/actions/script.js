import adapter from '../adapter'

export function createScript(scriptInputs) {

  return (dispatch) => {
    return adapter.eventHandlers.createScript(scriptInputs)
    .then(scriptData => {
      dispatch(setCurrentScript(scriptData))
    })
  }
}


export function setCurrentScript(scriptData) {
  return {
    type: "SET_CURRENT_SCRIPT",
    payload: scriptData
  }
}
