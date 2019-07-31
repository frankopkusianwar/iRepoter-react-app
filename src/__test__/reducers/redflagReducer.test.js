import { GET_REDFLAGS_SUCCESS, GET_REDFLAGS_FAILURE } from '../../actions/types';
import redflagReducer from '../../reducers/RedFlagReducer';

describe('test redflag reducer', () => {
  it('should return the initial state', () => {
    expect(redflagReducer({ redflags: [] }, {})).toEqual({
      redflags: [],
    });
  });

  it('should update store when gets all redflags', () => {
    expect(
      redflagReducer(
        undefined,
        {
          type: GET_REDFLAGS_SUCCESS,
          redflags: undefined,

        },
      ),
    ).toEqual({
      redflags: undefined,

    });
  });

  it('should update store when fails to get redflags', () => {
    expect(
      redflagReducer(
        undefined,
        {
          type: GET_REDFLAGS_FAILURE,
          error: {},

        },
      ),
    ).toEqual({
      error: {},
      redflags: [],

    });
  });
});
