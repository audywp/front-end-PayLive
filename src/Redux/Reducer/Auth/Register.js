const intialState = {
  data: {},
  isLoading: false
}

export default function Register (state = intialState, action) {
  switch (action.type) {
    case 'IS_REGISTER':
      return {
        ...state,
        isLoading: true,
        data: action.payload
      }
    case 'FAILED_REGISTER':
      return {
        ...state,
        isLoading: true,
        data: action.payload
      }
    default:
      return state
  }
}
