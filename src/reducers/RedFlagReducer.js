import { GET_REDFLAGS_SUCCESS, GET_REDFLAGS_FAILURE } from '../actions/types';


const initialState = {
  redflags: [],
};

const redflagReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REDFLAGS_SUCCESS:
      return {
        ...state,
        redflags: action.payload,
      };
    case GET_REDFLAGS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default redflagReducer;
