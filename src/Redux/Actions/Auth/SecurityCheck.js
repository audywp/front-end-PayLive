import config from '../../../Utils/config'
import axios from 'axios'
import { Alert, AsyncStorage } from 'react-native'
export const SecurityCheck = (id, data) => async dispatch => {
  try {
    const res = await axios.post(config.APP_BACKEND.concat('auth/security/check/'), data)
    await AsyncStorage.setItem('token', res.data.token)
    if (await res.data.success === true) {
      dispatch({
        type: 'CHECK',
        payload: res.data
      })
    } else {
      Alert.alert(res.data.msg)
    }
  } catch (error) {
    console.log(error)
  }
}
