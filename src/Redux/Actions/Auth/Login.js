import config from '../../../Utils/config'
import axios from 'axios'
import { Alert } from 'react-native'
export const setLogin = (data) => async dispatch => {
  try {
    const res = await axios.post(config.APP_BACKEND.concat('auth/signin'), data)
    console.log(res.data)
    if (await res.data.success === true) {
      dispatch({
        type: 'IS_LOGIN',
        payload: res.data
      })
    } else {
      Alert.alert(res.data.msg)
    }
  } catch (error) {
    console.log(error)
  }
}

export const SecurityCheck = (id, data) => async dispatch => {
  try {
    const res = await axios.post(config.APP_BACKEND.concat(`auth/security/check/${id}`), data)
    console.log(res)
    if (res.data.success === true) {
      dispatch({
        type: 'IS_VERIFIED',
        payload: res.data
      })
    } else {
      Alert.alert(res.data.msg)
    }
  } catch (error) {
    console.log(error)
  }
}

export const isOut = () => async dispatch => {
  dispatch({
    type: 'IS_LOGOUT'
  })
}
