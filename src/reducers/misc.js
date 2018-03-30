export default function misc(state = {}, action) {
  switch (action.type) {
    case 'SET_VAL':
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case 'TOGGLE_MISC':
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };
    default:
      break;
  }
  return state;
}
