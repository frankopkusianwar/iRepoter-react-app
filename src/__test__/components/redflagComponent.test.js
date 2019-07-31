import React from 'react';
import { shallow } from 'enzyme';
import { RedFlag } from '../../components/home/RedFlags';


const props = {
  redFlagAction: jest.fn(),
};

describe('redflag view', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<RedFlag {...props} />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should call componentWillMount', () => {
    const wrapperInstance = wrapper.instance();
    wrapperInstance.componentWillMount();
    expect(props.redFlagAction).toHaveBeenCalledTimes(2);
  });
});
