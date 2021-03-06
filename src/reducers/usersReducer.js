export default function usersReducer(
  state = {
    name: null,
    currentUserId: null
    },
  {type, payload}
) {
  switch (type) {
    case "SET_CURRENT_USER":
      return {...state, name: payload.name, currentUserId: payload.user_id}
    case "REMOVE_CURRENT_USER":
      return {...state, name: null, currentUserId: null}
    default:
      return state
  }
}
