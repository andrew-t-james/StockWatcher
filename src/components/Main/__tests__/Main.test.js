import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Main from '../index';
import Search from '../../Search';
import Stocks from '../../Stocks';
import ToastMessage from '../../ToastMessage';

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

  test('should pass default props to Stocks component', () => {
    const actual = wrapper.find(Search).props();
    const expected = { getStockQuotes: wrapper.instance().getStockQuotes };

    expect(actual).toEqual(expected);
  });

  test('should show error message if ticker is incorrect', async () => {
    const expected = 1;

    wrapper.setState({
      hasError: true,
    });

    const actual = wrapper.find(ToastMessage).length;
    expect(actual).toBe(expected);
  });

  test('should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
