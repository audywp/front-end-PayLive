const intialState = {
  data: {},
  isLoading: false
}

export default function SecurityCheck (state = intialState, { type, payload }) {
  switch (type) {
    case 'CHECK':
      return {
        ...state,
        isLogged: true,
        isLoading: true,
        data: payload
      }
    default:
      return { ...state }
  }
}
