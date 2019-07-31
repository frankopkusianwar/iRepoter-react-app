/* eslint-disable no-undef */
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  LOGIN_USER,
  LOGIN_USER_SUCESS,
  LOGIN_USER_FAILURE,
} from './types';

export const loginUser = () => ({
  type: LOGIN_USER,
  payload: true,
});

export const loginUserSucess = response => ({
  type: LOGIN_USER_SUCESS,
  payload: { msg: response.data },
});

export const loginUserfailure = error => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});

export const signinAction = credentials => (dispatch) => {
  dispatch(loginUser());
  return axios
    .post('https://ireporter-challenge4.herokuapp.com/api/v1/login', credentials)
    .then((response) => {
      sessionStorage.setItem('token', response.data.token);
      toast.dismiss();
      dispatch(loginUserSucess(response));
      toast.success('successfully loggedin!', {
        autoClose: 12000,
        hideProgressBar: false,
      });
    })
    .catch(
      (error) => {
        dispatch({
          type: LOGIN_USER_FAILURE,
          payload: error,
        });
        toast.dismiss();
        toast.error(`${error.response.data.message}`, {
          autoClose: 3000,
          hideProgressBar: true,
        });
      },
    );
};

export default signinAction;
