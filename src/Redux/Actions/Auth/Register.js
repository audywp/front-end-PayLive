import config from '../../../Utils/config'
import axios from 'axios'
import { Alert } from 'react-native'

export const setRegister = data => async dispatch => {
  // return {
  //   type: 'IS_REGISTER',
  //   payload: new Promise((resolve, reject) => {
  //     axios.post(config.APP_BACKEND.concat('auth/signin'), data).then(respone => resolve(respone.data))
  //   })
  // }
  try {
    const res = await axios.post(config.APP_BACKEND.concat('auth/register'), data)
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
