import config from '../../../Utils/config'
import axios from 'axios'

export const setVerify = data => async dispatch => {
  try {
    const res = await axios.get(config.APP_BACKEND.concat(`auth/verify?code=${data}`))
    await dispatch({
      type: 'IS_VERIFICATION',
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}
