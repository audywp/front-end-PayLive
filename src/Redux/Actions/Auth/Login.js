import config from '../../../Utils/config'
import axios from 'axios'
import { Alert } from 'react-native'
import RNEexitApp from 'react-native-exit-app'
import AsyncStorage from '@react-native-community/async-storage'
export const setLogin = (data) => async dispatch => {
  try {
    const res = await axios.post(config.APP_BACKEND.concat('auth/signin'), data)
    console.log(res.data)
    if (await res.data.success === true) {
      dispatch({
        type: 'IS_LOGIN',
        payload: res.data
      }).then(() => {
        RNEexitApp.exitApp()
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
    if (res.data.success === true) {
      dispatch({
        type: 'IS_VERIFIED',
        payload: res.data
      })
      await AsyncStorage.setItem('id_user', res.data.id_user)
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
