import config from '../../../Utils/config'
import axios from 'axios'
import { Alert } from 'react-native'

export const setVerify = (id, data) => async dispatch => {
  try {
    const res = await axios.get(config.APP_BACKEND.concat(`auth/verify/${id}?code=${data}`))
    if (res.data.success === true) {
      dispatch({
        type: 'IS_VERIFIIED',
        payload: res.data
      })
    } else {
      Alert.alert(res.data.msg)
    }
  } catch (error) {
    console.log(error)
  }
}

export const MakeCode = (id, data) => async dispatch => {
  try {
    const res = await axios.patch(config.APP_BACKEND.concat(`auth/security/${id}`, data))
    if (res.data.success === true) {
      dispatch({
        type: 'MAKE_CODE',
        payload: res.data
      })
    } else {
      Alert.alert(res.data.msg)
    }
  } catch (error) {
    console.log(error)
  }
}
