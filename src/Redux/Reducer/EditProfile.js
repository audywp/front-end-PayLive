const initialState = {
  data: {},
  user: {},
  isLoading: false
}

const EditProfile = (state = initialState, { type, payload, userPayload }) => {
  switch (type) {
    case 'EDIT_PROFILE':
      return {
        ...state,
        isLoading: true,
        data: payload
      }
    case 'GET_PROFILE':
      return {
        ...state,
        user: userPayload
      }
    default:
      return {
        ...state
      }
  }
}

export default EditProfile
