import adapter from '../adapter'

export function createScript(scriptInputs) {
  console.log('scriptInputs')
  console.log(scriptInputs)
  return (dispatch) => {
    return adapter.eventHandlers.createScript(scriptInputs)
    .then(scriptData => {
      console.log('returned data from backend')
      console.log(scriptData)
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
