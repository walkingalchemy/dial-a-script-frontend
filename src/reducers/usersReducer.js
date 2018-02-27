export default function usersReducer(state = { name: null }, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      console.log({...state, name: action.payload.name});
      return {...state, name: action.payload.name}
    default:
      return state
  }
}
