const intialState = {
  data: {},
  isLoading: false
}

export default function Verify (state = intialState, action) {
  switch (action.type) {
    case 'IS_VERIFICATION':
      return {
        ...state,
        isLoading: true,
        data: action.payload
      }
    default:
      return { ...state }
  }
}
