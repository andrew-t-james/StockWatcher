import React from 'react';
import { shallow } from 'enzyme';
import Search from '../';
import renderer from 'react-test-renderer';

describe('Search Unit tests', () => {
  test('it should render', () => {
    const wrapper = renderer.create(<Search />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
