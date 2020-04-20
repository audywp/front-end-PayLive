
const intialState = {
  data: {},
  isLoading: false,
  pending: false,
  isVerified: false
}

export default function Verify (state = intialState, action) {
  switch (action.type) {
    case 'IS_VERIFIIED':
      return {
        ...state,
        isLoading: true,
        pending: true,
        isVerified: true,
        data: action.payload
      }
    case 'MAKE_CODE':
      return {
        ...state,
        isLoading: true,
        data: action.payload
      }
    default:
      return { ...state }
  }
}
