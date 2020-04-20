const initialState = {
  data: {},
  isLoading: false
}

const EditProfile = (state = initialState, { type, payload }) => {
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
        data: payload
      }
    default:
      return {
        ...state
      }
  }
}

export default EditProfile
