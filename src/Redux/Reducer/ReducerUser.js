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
    default:
      return state
  }
}

export default ReducerUser
