import React from 'react';
import { shallow } from 'enzyme';
import { SignIn, mapStateToProps } from '../../components/signin/SignIn';

const props = {
  history: { push: jest.fn() },
  signinAction: jest.fn(),
  handleSubmit: jest.fn(),
};

describe('test login component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SignIn {...props} />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should change state when as user inputs data', () => {
    const e = {
      target: {
        name: 'username',
        value: 'okiror',
      },
    };
    wrapper.instance().changeHandler(e);
    expect(wrapper.instance().state.username).toEqual('okiror');
  });

  it('should login on submission', () => {
    const e = {
      preventDefault: jest.fn(),
    };
    wrapper.instance().handleSubmit(e);
    expect(props.signinAction).toHaveBeenCalledTimes(1);
  });

  it('should redirect on successful login', () => {
    const nextProps = {
      loggedIn: true,
    };
    wrapper.setProps({ ...nextProps });
    expect(props.history.push).toBeCalled();
  });

  it('should not redirect on login failure', () => {
    wrapper.setProps({ loggedIn: false });
    expect(props.history.push).not.toBeCalled();
  });
});
it('should map redux state values to component props', () => {
  const state = {
    signinReducer: { loggedIn: false },
  };
  expect(mapStateToProps(state)).toEqual({ loggedIn: false });
});
