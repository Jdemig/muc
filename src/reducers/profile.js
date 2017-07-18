export default function realEstateData(state = {
  inputName: '',
  inputAddress: '',
  inputPreferences: '',
  profilePic: ''
}, action) {
  switch (action.type) {
    case 'RESET_PROFILE': 
      return {
        ...state,
        inputName: '',
        inputPreferences: '',
        profilePic: ''
      }
    case 'SET_PROFILE_PIC':
      return {
        ...state,
        profilePic: action.payload
      }
    case 'SAVED_DATA':
      return {
        ...state,
        saved: true
      }
    case 'REMOVE_SAVED_NOTICE':
      return {
        ...state,
        saved: false
      }
    case 'UPLOAD_IMAGE':
      return {
        ...state,
        upload: state.upload ? false : true
      }
    case 'SET_INFO':
      return {
        ...state,
        inputName: action.payload.name,
        inputPreferences: action.payload.preferences,
        profilePic: action.payload.profilePic
      }
    case 'EDIT_DATA':
      return {
        ...state,
        editName: action.payload === 'NAME' ? true : false,
        editAddress: action.payload === 'ADDRESS' ? true : false,
        editPreferences: action.payload === 'PREFERENCES' ? true : false
      }
      break;
    case 'CHANGE_INPUT':
      {
        switch(action.payload.data) {
          case 'NAME':
            return {
              ...state,
              inputName: action.payload.value
            }
            break;
          case 'ADDRESS':
            return  {
              ...state,
              inputAddress: action.payload.value
            }
            break;
          case 'PREFERENCES':
            return {
              ...state,
              inputPreferences: action.payload.value
            }
            break;
          default:
            return state;
        }
      }
    default:
      return state;
  }
}