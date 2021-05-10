import axios from 'axios';
import * as authActions from './auth-action';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = credential => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/users/signup', credential);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error));
  }
};

export default { register };
