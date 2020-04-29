import config from './../../Utils/config'
import axios from 'axios'
import Config from './../../Utils/config'

export const getCash = () => async dispatch => {
  try {
    const response = axios.get(
      config.APP_BACKEND.concat('transaction/category')
    )
    console.log(response)
    if ((await response.data.success) === true) {
      dispatch({
        type: 'GET_CASH',
        payload: response.data
      })
    } else {
      console.log(response)
    }
  } catch (error) {
    console.log(error)
  }
}

export const getHistory = (id) => async dispatch => {
  try {
    const response = await axios.get(
      Config.APP_BACKEND.concat(`user/balance/history/${id}`)
    )
    console.log('cash', response.data.success)
    if (response.data.success) {
      dispatch({
        type: 'GET_HISTORY',
        payload: response.data.data
      })
    } else {
      console.log(response)
    }
  } catch (error) {
    console.log(error)
  }
}
