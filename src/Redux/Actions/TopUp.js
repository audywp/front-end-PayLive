import config from '../../Utils/config'
import axios from 'axios'
import { ToastAndroid } from 'react-native'

export const topUp = (id, data) => async dispatch => {
  try {
    const res = await axios.patch(config.APP_BACKEND.concat(`user/topup/${id}`), data)
    dispatch({
      type: 'UPDATE_TOP_UP',
      payload: res.data
    })
    ToastAndroid.show('Top Up Anda Berhasil', ToastAndroid.show)
  } catch (error) {
    console.log(error)
  }
}

export default topUp
