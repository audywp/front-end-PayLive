import config from '../../Utils/config'
import axios from 'axios'
import { Alert } from 'react-native'

export const UpdateProfile = (id, data) => async dispatch => {
  const res = await axios.get(config.APP_BACKEND.concat(`user/details/${id}`), data)
  if (res.data.success) {
    const update = await axios.patch(config.APP_BACKEND.concat(`user/${res.data.data.id}`))
    if (update.data.success) {
      dispatch({
        type: 'EDIT_PROFILE',
        payload: update.data
      })
    } else {
      Alert.alert(update.data.msg)
    }
    dispatch({
      type: 'GET_DATA',
      payload: res.data
    })
  } else {
    Alert.alert(res.data.msg)
  }
}
