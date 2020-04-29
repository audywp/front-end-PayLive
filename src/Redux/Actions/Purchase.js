import config from '../../Utils/config'
import axios from 'axios'
import { Alert } from 'react-native'

export const doPurchase = (id, amount) => async dispatch => {
  const res = await axios.post(config.APP_BACKEND.concat(`transaction/pay/purchase/${id}`), amount)
  dispatch({
    type: 'PURCHASE',
    payload: res.data
  })
}
