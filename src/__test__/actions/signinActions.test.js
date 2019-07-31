import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { LOGIN_USER, LOGIN_USER_SUCESS, LOGIN_USER_FAILURE } from '../../actions/types';
import signinAction from '../../actions/SigninAction';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('tests for loginAction', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should dispatch login successfull', () => {
    const store = mockStore({});
    const data = {
      username: 'franco',
      password: 'security',

    };
    const mockData = { userType: false };
    const expectedActions = [
      {
        type: LOGIN_USER,
        payload: true,
      },
      {
        type: LOGIN_USER_SUCESS,
        payload: { msg: { userType: false } },
      },
    ];
    moxios.stubRequest('https://ireporter-challenge4.herokuapp.com/api/v1/login', {
      status: 201,
      response: mockData,

    });
    store.dispatch(signinAction(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should dispatch login failure on failure', () => {
    const store = mockStore({});
    const data = {
      username: 'franco',
      password: 'security',
    };
    const mockData = {
      message: 'invalid credentials',
    };

    const expectedActions = [

      {
        type: LOGIN_USER,
        error: new Error('Request failed with status code 400'),
      },
      {
        type: LOGIN_USER_FAILURE,
        error: new Error('Request failed with status code 400'),
      },
    ];
    moxios.stubRequest('https://ireporter-challenge4.herokuapp.com/api/v1/login', {
      status: 400,
      error: mockData,

    });
    store.dispatch(signinAction(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
