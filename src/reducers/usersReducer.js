export default function usersReducer(state = { name: null, currentUserId: null }, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {...state, name: action.payload.name, currentUserId: action.payload.user_id}
    default:
      return state
  }
}
