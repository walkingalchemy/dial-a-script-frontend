import adapter from '../adapter'


export function loginUser(name, password) {
  return (dispatch) => {
    adapter.auth.login({name, password})
    .then(userData => {
      dispatch(setCurrentUser(userData))
      localStorage.setItem('jwt', userData.jwt)
    })
  }
}

export function signupUser(name, password) {
  return (dispatch) => {
    adapter.auth.signup({name, password})
    .then(userData => {
      dispatch(setCurrentUser(userData))
      localStorage.setItem('jwt', userData.jwt)
    })
  }
}



export function setCurrentUser(userData) {
  return {
    type: "SET_CURRENT_USER",
    payload: userData
  }
}
