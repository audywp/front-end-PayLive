import config from '../../Utils/config'
import axios from 'axios'

export const getUser = (id) => async dispatch => { // 26
  try {
    const res = await axios.get(config.APP_BACKEND.concat(`user/details/${id}`))
    console.log('ini akun', res)
    dispatch({
      type: 'GET_USER',
      payload: res.data.data
    })
  } catch (error) {
    console.log(error)
  }
}
