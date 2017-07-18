export function editData(data) {
  return {
    type: 'EDIT_DATA',
    payload: data
  };
}

export function handleInput(e, data) {
  return {
    type: 'CHANGE_INPUT',
    payload: {
      value: e.target.value,
      data: data
    }
  }
}

export function setInfo(data) {
  return {
    type: 'SET_INFO',
    payload: data
  }
}

export function uploadImage() {
  return {
    type: 'UPLOAD_IMAGE'
  }
}

export function savedData() {
  return {
    type: 'SAVED_DATA'
  }
}

export function removeSavedNotice() {
  return {
    type: 'REMOVE_SAVED_NOTICE'
  }
}

export function setProfilePic(url) {
  console.log(url)
  return {
    type: 'SET_PROFILE_PIC',
    payload: url
  }
}

export function resetProfile() {
  return {
    type: 'RESET_PROFILE'
  }
}