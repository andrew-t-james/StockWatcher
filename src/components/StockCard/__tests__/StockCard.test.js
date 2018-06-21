import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import StockCard from '../index';

describe('StockCard Unit test', () => {
  const mockData = {
    name: 'Apple Inc.',
    shortName: 'AAPL',
    high: 188.35,
    low: 185.93,
    latestPrice: 185.24,
    change: -1.26,
  };

  let wrapper;
  beforeEach(() => (wrapper = shallow(<StockCard {...mockData} />)));
  afterEach(() => wrapper.unmount());

  test('should render conditionally render positive stock quotes', () => {
    const mockData = {
      name: 'Alphabet Inc.',
      shortName: 'GOOG',
      high: 1177.295,
      low: 1153.83,
      latestPrice: 1161.44,
      change: 8.4,
    };
    const wrapper = shallow(<StockCard {...mockData} />);
    const actual = wrapper.find('.positive-change').text();
    const expected = ' ▲8.4 (1.01%)';
    expect(actual).toBe(expected);
  });

  test('should render conditionally render negative stock quotes', () => {
    const actual = wrapper.find('.negative-change').text();
    const expected = ' ▼-1.26 (1.02%)';
    expect(actual).toBe(expected);
  });

  test('should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
