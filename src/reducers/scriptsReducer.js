export default function scriptsReducer(
  state = {
    currentScript: null
    },
  {type, payload}
) {
  switch (type) {
    case "SET_CURRENT_SCRIPT":
      return {...state, currentScript: payload}
    default:
      return state
  }
}
