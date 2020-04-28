const intialState = {
  data: {},
  isLoading: false,
  isLogged: false,
  checkSuccess: false
}

export default function Login (state = intialState, { type, payload }) {
  switch (type) {
    case 'IS_LOGIN':
      return {
        ...state,
        isLoading: true,
        checkSuccess: true,
        data: payload
      }
    case 'IS_VERIFIED':
      return {
        isLoading: true,
        isLogged: true,
        data: payload
      }
    case 'IS_FAILED':
      return {
        ...state,
        data: payload
      }
    case 'IS_LOGOUT':
      return {
        ...state,
        isLoading: false,
        isLogged: false,
        data: null
      }
    case 'LOGIN':
      return {
        data: payload,
        isLoading: true,
        isLogged: true,
        checkSuccess: true
      }
    default:
      return state
  }
}
