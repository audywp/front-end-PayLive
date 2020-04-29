import config from '../../Utils/config'
import axios from 'axios'
import { ToastAndroid } from 'react-native'

export const TransferPaylive = (id, data) => async dispatch => {
  try {
    const res = await axios.post(
      config.APP_BACKEND.concat(`user/transfer/${id}`),
      data
    )
    dispatch({
      type: 'TRANSFER_PAYLIVE',
      payload: res.data
    })
    ToastAndroid.show('Transfer Anda Berhasil', ToastAndroid.show)
  } catch (error) {
    console.log(error)
  }
}

export default TransferPaylive
