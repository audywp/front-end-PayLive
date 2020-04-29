import config from '../../Utils/config';
import axios from 'axios';
import {Alert} from 'react-native';

export const GetProfile = id => async dispatch => {
  try {
    const res = await axios.get(
      config.APP_BACKEND.concat(`user/details/${id}`),
    );
    console.log('halo', res);
    if (res.data.success) {
      dispatch({
        type: 'GET_PROFILE',
        userPayload: res.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const UpdateProfile = (id, data) => async dispatch => {
  try {
    const update = await axios.patch(
      config.APP_BACKEND.concat(`user/${id}`),
      data,
    );
    if (update.data.success) {
      dispatch({
        type: 'EDIT_PROFILE',
        payload: update.data,
      });
    } else {
      Alert.alert(update.data.msg);
    }
  } catch (error) {
    console.log(error);
  }
};
