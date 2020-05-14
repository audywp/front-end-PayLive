const initState = {
  data: {},
  isLoading: false
}

const Purchase = (state = initState, action) => {
  switch (action.type) {
    case 'PURCHASE':
      return {
        ...state,
        data: action.payload,
        isLoading: true
      }
    default:
      return state
  }
}

export default Purchase
