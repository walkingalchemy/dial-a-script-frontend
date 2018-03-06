export default function scriptsReducer(
  state = {
    currentScript: null,
    allScripts: [],
    },
  {type, payload}
) {
  switch (type) {
    case "SET_CURRENT_SCRIPT":
      return {...state, currentScript: payload}
    case "SET_SCRIPTS":
      return {...state, allScripts: payload}
    default:
      return state
  }
}
