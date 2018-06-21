import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Main from '../index';
import Search from '../../Search';
import Stocks from '../../Stocks';

describe('Main unit test', () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Main />)));
  afterEach(() => wrapper.unmount());

  test('should render children components', () => {
    const search = wrapper.find(Search).length;
    const stocks = wrapper.find(Stocks).length;

    expect(search).toBe(1);
    expect(stocks).toBe(1);
  });

  test('should pass default props to Stocks component', () => {
    const actual = wrapper.find(Stocks).props();
    const expected = { stocks: [] };

    expect(actual).toEqual(expected);
  });

  test('should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
