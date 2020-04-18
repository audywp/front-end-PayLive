const intialState = {
  data: {},
  isLogged: false,
  isLoading: false
}

export default function Login (state = intialState, action) {
  switch (action.type) {
    case 'IS_LOGIN':
      return {
        ...state,
        isLogged: true,
        isLoading: true
      }
    case 'Is_LOGOUT':
      return {
        ...state,
        isLogged: false,
        isLoading: true
      }
    default:
      return state
  }
}
