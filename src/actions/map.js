export function setData(data) {
  return {
    type: 'SET_DATA',
    payload: data
  };
}

export function handleDropDownType(data) {
  return {
    type: 'SET_LIST_DROPDOWN'
  };
}

export function handleDropDownPrice(data) {
  return {
    type: 'SET_RANGE_DROPDOWN'
  };
}

export function handleDropDownBeds(data) {
  return {
    type: 'SET_BED_DROPDOWN'
  };
}

export function handleSettingDropDown(data) {
  return {
    type: 'SET_SETTING_DROPDOWN'
  };
}

export function goToMap(data) {
  return {
    type: 'SET_MAP'
  };
}

export function goToList(data) {
  return {
    type: 'SET_LIST'
  };
}

export function handleMaxFocus(data) {
  return {
    type: 'HANDLE_FOCUS_MAX'
  };
}

export function handleMinFocus(data) {
  return {
    type: 'HANDLE_FOCUS_MIN'
  }
}