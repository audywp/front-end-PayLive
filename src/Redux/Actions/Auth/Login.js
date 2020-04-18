import config from '../../../Utils/config'
import axios from 'axios'

export const setLogin = (data) => async dispatch => {
  try {
    const res = await axios.post(config.APP_BACKEND.concat('auth/signin'), data)
    console.log(res.data)
    if (await res.data.success === false) {
      dispatch({
        type: 'IS_FAILED',
        payload: res.data
      })
    } else {
      dispatch({
        type: 'IS_LOGIN',
        payload: res.data
      })
    }
  } catch (error) {
    console.log(error)
  }
}
