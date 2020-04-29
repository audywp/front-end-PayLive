const initialState = {
  data: [],
  isLogged: false,
  isLoading: false
}

export default function Cash (state = initialState, { type, payload }) {
  switch (type) {
    case 'GET_CASH':
      return {
        ...state,
        isLogged: true,
        isLoading: true,
        data: payload
      }
    case 'GET_HISTORY':
      return {
        ...state,
        isLoading: true,
        isLogged: true,
        data: payload
      }
    case 'MORE_HISTORY':
      const datas = [...state.data, payload]

      return {
        ...state,
        data: [...state.data, ...payload],
        isLoading: false
      }
    default:
      return state
  }
}
