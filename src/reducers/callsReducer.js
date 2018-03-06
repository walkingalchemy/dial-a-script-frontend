export default function scriptsReducer(
  state = {
    currentCall: null
    },
  {type, payload}
) {
  switch (type) {
    case "SET_CURRENT_CALL":
      return {...state, currentCall: payload}
    default:
      return state
  }
}
