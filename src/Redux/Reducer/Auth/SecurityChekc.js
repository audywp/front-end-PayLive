const intialState = {
  data: {},
  isLogged: false,
  isLoading: false,
  hideGuide: false
}

export default function SecurityCheck (state = intialState, { type, payload }) {
  switch (type) {
    case 'CHECK':
      return {
        ...state,
        isLogged: true,
        isLoading: true,
        hideGuide: true,
        data: payload
      }
    default:
      return state
  }
}
