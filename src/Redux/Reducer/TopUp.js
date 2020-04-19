const initialState = {
  topUp: {},
  isLoading: false
}

const topUp = (state = initialState, action) => {
  switch (action.type) {
    case 'TOP_UP': {
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

export default topUp
