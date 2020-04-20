const intialState = {
  data: {},
  isLoading: false
}

export default function MakeSecurity (state = intialState, { type, payload }) {
  switch (type) {
    case 'MAKE_SECURITY':
      return {
        ...state,
        isLoading: true,
        data: payload
      }
    default:
      return state
  }
}
