import adapter from '../adapter'


export function loginUser(name, password) {
  return (dispatch) => {
    return adapter.auth.login({name, password})
    .then(userData => {
      console.log(userData)
      dispatch(setCurrentUser(userData))
      localStorage.setItem('jwt', userData.jwt)
    })
  }
}

export function signupUser(name, password) {
  return (dispatch) => {
    return adapter.auth.signup({name, password})
    .then(userData => {
      dispatch(setCurrentUser(userData))
      localStorage.setItem('jwt', userData.jwt)
    })
  }
}

export function logoutUser() {
  return (dispatch) => {
    dispatch(removeCurrentUser())
    localStorage.removeItem('jwt')
  }
}

export function removeCurrentUser() {
  return {
    type: "REMOVE_CURRENT_USER",
    payload: {}
  }
}

export function setCurrentUser(userData) {
  return {
    type: "SET_CURRENT_USER",
    payload: userData
  }
}
