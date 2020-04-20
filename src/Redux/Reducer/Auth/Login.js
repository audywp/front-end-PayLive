const intialState = {
  data: {},
  isLoading: false,
  isLogged: false
}

export default function Login (state = intialState, { type, payload }) {
  switch (type) {
    case 'IS_LOGIN':
      return {
        ...state,
        isLoading: true,
        data: payload,
        isLogged: true
      }
    case 'IS_FAILED':
      return {
        ...state,
        isLogged: false,
        isLoading: true,
        data: payload
      }
    case 'IS_LOGOUT':
      return {
        ...state,
        isLogged: false,
        isLoading: true
      }
    default:
      return state
  }
}
