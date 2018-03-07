import adapter from '../adapter'

export function createScript(scriptInputs) {

  return (dispatch) => {
    return adapter.eventHandlers.createScript(scriptInputs)
    .then(scriptData => {
      dispatch(setCurrentScript(scriptData))
      return scriptData
    })
  }
}

export function getScripts() {
  return (dispatch) => {
    return adapter.eventHandlers.getScripts()
    .then(scripts => {
      dispatch(setScripts(scripts))
    })
  }
}

export function setScripts(scriptsData) {
  return {
    type: "SET_SCRIPTS",
    payload: scriptsData
  }
}

export function setCurrentScript(scriptData) {
  return {
    type: "SET_CURRENT_SCRIPT",
    payload: scriptData
  }
}
