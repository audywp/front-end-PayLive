const intialState = {
  data: {},
  isLoading: false,
  pending: false
}

export default function Verify (state = intialState, action) {
  switch (action.type) {
    case 'IS_VERIFICATION':
      return {
        ...state,
        isLoading: true,
        pending: true,
        data: action.payload
      }
    case 'IS_FAILED':
      return {
        ...state,
        isLoading: true,
        data: action.payload
      }
    default:
      return { ...state }
  }
}
