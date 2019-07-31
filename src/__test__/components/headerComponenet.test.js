import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/common/Header';


describe('navbar view', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
