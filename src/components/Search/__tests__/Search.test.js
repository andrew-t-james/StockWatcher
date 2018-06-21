import React from 'react';
import { shallow } from 'enzyme';
import Search from '../';
import toJson from 'enzyme-to-json';

describe('Search Unit tests', () => {
  test('it should render', () => {
    const wrapper = shallow(<Search />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
