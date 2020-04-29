const initialState = {
  transfer: {},
  isLoading: false
}

const TransferPaylive = (state = initialState, action) => {
  switch (action.type) {
    case 'TRANSFER_PAYLIVE': {
      return {
        ...state,
        isLoading: true,
        transfer: action.payload
      }
    }
    default:
      return state
  }
}

export default TransferPaylive
