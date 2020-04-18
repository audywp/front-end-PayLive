import config from '../../../Utils/config'
import axios from 'axios'

export const setRegister = data => async dispatch => {
  try {
    const res = await axios.post(config.APP_BACKEND.concat('auth/register'), data)
    dispatch({
      type: 'IS_REGISTER',
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}
