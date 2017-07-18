export default function realEstateData(state = {}, action) {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        houseData: action.payload.data || null
      }
      break;
    case 'SET_LIST_DROPDOWN':
      return {
        ...state,
        dropDownHouseType: !state.dropDownHouseType ? true : false,
        dropDownPrice: false,
        dropDownBed: false
      }
      break;
    case 'SET_RANGE_DROPDOWN':
      return {
        ...state,
        dropDownHouseType: false,
        dropDownPrice: !state.dropDownPrice ? true : false,
        dropDownBed: false
      }
      break;
    case 'SET_BED_DROPDOWN':
      return {
        ...state,
        dropDownHouseType: false,
        dropDownPrice: false,
        dropDownBed: !state.dropDownBed ? true : false
      }
      break;
    case 'SET_SETTING_DROPDOWN':
      return {
        ...state,
        dropDownPreferences: !state.dropDownPreferences ? true : false
      }
      break;
    case 'SET_MAP':
      return {
        ...state,
        viewMap: true
      }
    case 'SET_LIST':
      return {
        ...state,
        viewMap: false
      }
    case 'HANDLE_FOCUS_MIN':
      return {
        ...state,
        minInputSelect: true,
        maxInputSelect: false
      }
    case 'HANDLE_FOCUS_MAX':
      return {
        ...state,
        maxInputSelect: true,
        minInputSelect: false
      }
    default:
      return state;
  }
}