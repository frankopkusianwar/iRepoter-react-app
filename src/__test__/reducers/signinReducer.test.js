
import { LOGIN_USER, LOGIN_USER_SUCESS, LOGIN_USER_FAILURE } from '../../actions/types';
import signinReducer from '../../reducers/SigninReducer';


describe('test login reducer', () => {
  it('should return the initial state', () => {
    expect(signinReducer(undefined, {})).toEqual({
      isLoggingIn: false, loggedIn: false,
    });
  });

  it('should handle register user request', () => {
    expect(
      signinReducer(
        undefined,
        {
          type: LOGIN_USER,
          payload: true,

        },
      ),
    ).toEqual({
      loggedIn: false, isLoggingIn: true,
    });
  });

  it('should update store when a user successfully registers', () => {
    expect(
      signinReducer(
        undefined,
        {
          type: LOGIN_USER_SUCESS,
          payload: {
            message: 'user logged in successfuly',
          },

        },
      ),
    ).toEqual({
      data: { message: 'user logged in successfuly' },
      isLoggingIn: false,
      loggedIn: true,

    });
  });
  it('should update store when a user fails to login', () => {
    expect(
      signinReducer(
        undefined,
        {
          type: LOGIN_USER_FAILURE,
          payload: {
            message: 'invalid login',
          },

        },
      ),
    ).toEqual({
      data: { message: 'invalid login' },
      isLoggingIn: false,
      loggedIn: false,

    });
  });
});
