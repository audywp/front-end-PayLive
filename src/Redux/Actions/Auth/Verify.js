import config from '../../../Utils/config'
import axios from 'axios'

export const setVerify = data => async dispatch => {
  try {
    const res = await axios.get(config.APP_BACKEND.concat(`auth/verify?code=${data}`))
    console.log(res.data)
    if (res.data.success === false) {
      await dispatch({
        type: 'IS_FAILED',
        payload: res.data
      })
    } else {
      await dispatch({
        type: 'IS_VERIFICATION',
        payload: res.data
      })
    }
  } catch (error) {
    console.log(error)
  }
}
