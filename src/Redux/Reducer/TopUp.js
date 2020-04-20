const initialState = {
  topUp: {},
  isLoading: false
}

const TopUp = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TOP_UP': {
      return {
        ...state,
        isLoading: true,
        topUp: action.payload
      }
    }
    default:
      return state
  }
}

export default TopUp
