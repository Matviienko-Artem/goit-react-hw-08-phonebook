import axios from 'axios';
import * as authActions from './auth-action';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = credential => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/users/signup', credential);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

const logIn = credential => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post('/users/login', credential);
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

export default { register, logIn };

// ninja123@mail.com
// ninja123
