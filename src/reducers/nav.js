export default function realEstateData(state = {}, action) {
  switch (action.type) {
    case 'SET_DROPDOWN':
      return {
        dropDownNav: !state.dropDownNav ? true : false
      }
    default:
      return state;
  }
}