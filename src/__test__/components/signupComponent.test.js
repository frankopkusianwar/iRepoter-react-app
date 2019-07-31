import React from 'react';
import { shallow } from 'enzyme';
import { SignUp, mapStateToProps } from '../../components/signup/Signup';

const props = {
  history: { push: jest.fn() },
  signupAction: jest.fn(),
  handleSubmit: jest.fn(),
};

describe('test login component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SignUp {...props} />);
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

  it('should signup on submission', () => {
    const e = {
      preventDefault: jest.fn(),
    };
    wrapper.instance().handleSubmit(e);
    expect(props.signupAction).toHaveBeenCalledTimes(1);
  });

  it('should redirect on successful signup', () => {
    const nextProps = {
      isValid: true,
    };
    wrapper.setProps({ ...nextProps });
    expect(props.history.push).toBeCalled();
  });

  it('should not redirect on login failure', () => {
    wrapper.setProps({ isValid: false });
    expect(props.history.push).not.toBeCalled();
  });
});

it('should map redux state values to component props', () => {
  const state = {
    signupReducer: { isSigningUp: false },
  };
  expect(mapStateToProps(state)).toEqual({ isSigningUp: false });
});
