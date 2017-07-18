export default function realEstateData(state = {}, action) {
  switch (action.type) {
    case 'TOGGLE_SIGN_UP':
      return {
        ...state,
        signIn: false,
        signUp: state.signUp ? false : true
      }
    case 'TOGGLE_SIGN_IN':
      return {
        ...state,
        signUp: false,
        signIn: state.signIn ? false : true
      }
    case 'AUTH_USER':
      return {
        ...state,
        error: '',
        message: '',
        authenticated: true
      }
    case 'UNAUTH_USER':
      return {
        ...state,
        authenticated: false,
        error: action.payload
      }
    case 'AUTH_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}