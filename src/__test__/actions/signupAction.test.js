import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { REGISTER_USER, REGISTER_USER_SUCESS, REGISTER_USER_FAILURE } from '../../actions/types';
import signupAction from '../../actions/SignupAction';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('tests for loginAction', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should dispatch create success on successfull registration', () => {
    const store = mockStore({});
    const data = {
      firstname: 'frank',
      lastname: 'okiror',
      email: 'okirorfrank3@gmail.com',
      username: 'franco',
      password: 'security',

    };
    const mockData = { message: 'user created successfully' };

    const expectedActions = [
      {
        type: REGISTER_USER,
        payload: true,
      },
      {
        type: REGISTER_USER_SUCESS,
        payload: { msg: { message: 'user created successfully' } },
      },
    ];
    moxios.stubRequest('https://ireporter-challenge4.herokuapp.com/api/v1/users', {
      status: 201,
      response: mockData,

    });
    store.dispatch(signupAction(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should dispatch failure on registration failure', () => {
    const store = mockStore({});
    const data = {
      firstname: 'frank',
      lastname: 'okiror',
      email: 'okirorfrank3@gmail.com',
      username: 'franco',
      password: 'security',
    };
    const mockData = {
      message: 'invalid credentials',
    };

    const expectedActions = [
      {
        type: REGISTER_USER_FAILURE,
        error: new Error('Request failed with status code 400'),
      },
    ];
    moxios.stubRequest('https://ireporter-challenge4.herokuapp.com/api/v1/users', {
      status: 400,
      error: mockData,

    });
    store.dispatch(signupAction(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
