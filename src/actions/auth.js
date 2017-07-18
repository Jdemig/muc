export function authUser(data) {
  return {
    type: 'AUTH_USER'
  };
}

export function unauthUser(data) {
  return {
    type: 'UNAUTH_USER'
  }
}

export function toggleSignIn(data) {
  return {
    type: 'TOGGLE_SIGN_IN'
  }
}

export function toggleSignUp(data) {
  return {
    type: 'TOGGLE_SIGN_UP'
  }
}