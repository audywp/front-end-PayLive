import Config from '../../../Utils/config'
import axios from 'axios'
import { Alert } from 'react-native'

export const setRegister = data => async dispatch => {
  try {
    const res = await axios.post(Config.APP_BACKEND.concat('auth/register'), data)
    console.log(res.data)
    if (res.data.success === true) {
      return dispatch({
        type: 'IS_REGISTER',
        payload: res.data
      })
    } else {
      Alert.alert(res.data.msg)
    }
  } catch (error) {
    console.log(error)
  }
}
