export function setVal(key, value) {
  return {
    type: 'SET_VAL',
    payload: {
      key,
      value,
    },
  };
}

export function toggleMisc(key) {
  return {
    type: 'TOGGLE_MISC',
    payload: key,
  };
}
