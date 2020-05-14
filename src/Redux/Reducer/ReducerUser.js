const initialState = {
  usersdetails: [],
  isLoading: false
}

const ReducerUser = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER': {
      return {
        ...state,
        usersdetails: action.payload,
        isLoading: true
      }
    }
    case 'CLEAR_DATA':
      return {
        ...state,
        usersdetails: []
      }
    default:
      return state
  }
}

export default ReducerUser
