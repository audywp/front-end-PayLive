const intialState = {
  data: {},
  isLoading: false,
  pending: true
}
console.log(intialState.pending)
export default function Register (state = intialState, { type, payload }) {
  switch (type) {
    case 'IS_REGISTER':
      return {
        ...state,
        isLoading: true,
        pending: false,
        data: payload
      }
    case 'FAILED_REGISTER':
      return {
        ...state,
        isLoading: true,
        pengin: false,
        data: payload
      }
    default:
      return { ...state }
  }
}
