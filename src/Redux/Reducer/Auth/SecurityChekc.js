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
    case 'IS_LOGOUT':
      return {
        ...state,
        isLogged: false,
        isLoading: true,
        hideGuide: false
      }
    default:
      return state
  }
}
