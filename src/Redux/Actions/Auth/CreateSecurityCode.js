import config from '../../../Utils/config'
import axios from 'axios'
import { Alert } from 'react-native'

export const MakeSecurity = (id, data) => async dispatch => {
  try {
    const res = await axios.patch(config.APP_BACKEND.concat(`auth/security/${id}`), data)
    console.log(res.data)
    if (await res.data.success === true) {
      dispatch({
        type: 'MAKE_SECURITY',
        payload: res.data
      })
    } else {
      Alert.alert(res.data.msg)
    }
  } catch (error) {
    console.log(error)
  }
}
