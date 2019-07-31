import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../components/common/Navbar';


describe('navbar view', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Navbar />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
