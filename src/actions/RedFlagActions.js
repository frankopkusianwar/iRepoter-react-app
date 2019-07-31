import axios from 'axios';
import { conditionalExpression } from '@babel/types';
import { GET_REDFLAGS_SUCCESS, GET_REDFLAGS_FAILURE } from './types';

export const redFlagAction = () => async dispatch => axios.get('https://ireporter-challenge4.herokuapp.com/api/v1/red-flags', {
  headers: {
    'x-access-token': `${sessionStorage.token}`,
  },
}).then((response) => {
  dispatch({
    type: GET_REDFLAGS_SUCCESS,
    payload: response.data.data,
  });
}).catch((error) => {
  dispatch({
    type: GET_REDFLAGS_FAILURE,
    error,
  });
});

export default redFlagAction;
