export function loginUser(name, password) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ user: {name, password} })
    })
    .then(response => {

      return response.json()
    })
    .then(userData => {
      debugger
      dispatch(setCurrentUser(userData))
      localStorage.setItem('jwt', userData.jwt)
    })
  }
}

export function signupUser(name, password) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ user: {name, password} })
    })
    .then(response => {
      return response.json()
    })
    .then(userData => {
      dispatch(setCurrentUser(userData))
      localStorage.setItem('jwt', userData.jwt)
    })
  }
}

export function showUser(uid) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${uid}`)
    .then(resp => resp.json())
    .then( json => console.log(json))
  }
}

export function setCurrentUser(userData) {
  return {
    type: "SET_CURRENT_USER",
    payload: userData
  }
}
