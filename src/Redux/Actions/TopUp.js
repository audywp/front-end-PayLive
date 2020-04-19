import config from '../../Utils/config'
import axios from 'axios'
import { ToastAndroid } from 'react-native'

export const topUp = (data) => async dispatch => {
  try {
    const res = await axios.patch(config.APP_BACKEND.concat('/user/topup/10', data))
    if (res.data.success) {
      dispatch({
        type: 'UPDATE_TOP_UP',
        payload: res.data
      })
    } else {
      ToastAndroid.show('Failed Top UP', ToastAndroid.show)
    }
  } catch (error) {
    console.log(error)
  }
}

export default topUp
