import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { GET_REDFLAGS_SUCCESS, GET_REDFLAGS_FAILURE } from '../../actions/types';
import redFlagAction from '../../actions/RedFlagActions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
describe('tests for loginAction', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('should dispatch success on retrieval', () => {
    const store = mockStore({});
    const mockData = {
      data: { red_flags: [{ title: 'frank' }] },
    };
    const expectedActions = [
      {
        type: GET_REDFLAGS_SUCCESS,
        payload: mockData.data,
      },
    ];
    moxios.stubRequest('https://ireporter-challenge4.herokuapp.com/api/v1/red-flags', {
      status: 200,
      response: mockData,
    });
    store.dispatch(redFlagAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should dispatch failure on failure to retrieve data', () => {
    const store = mockStore({});
    const mockData = {
      message: 'invalid token',
    };
    const expectedActions = [
      {
        type: GET_REDFLAGS_FAILURE,
        error: new Error('Request failed with status code 400'),
      },
    ];
    moxios.stubRequest('https://ireporter-challenge4.herokuapp.com/api/v1/red-flags', {
      status: 400,
      error: mockData,
    });
    store.dispatch(redFlagAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
