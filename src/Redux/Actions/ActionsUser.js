import config from '../../Utils/config'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

export const getUser = (callback) => async dispatch => {
  try {
    const id = 18
    const res = await axios.get(config.APP_BACKEND.concat(`user/details/${id}`))
    callback(true)
    console.log('ini akun', res)
    dispatch({
      type: 'GET_USER',
      payload: res.data.data
    })
  } catch (error) {
    console.log(error)
  }
}
