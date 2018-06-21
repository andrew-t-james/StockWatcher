import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Stocks from '../index';
import StockCard from '../../StockCard';

describe('Stocks Units Tests', () => {
  let wrapper;
  const mockData = [
    {
      name: 'Apple Inc.',
      shortName: 'AAPL',
      high: 188.35,
      low: 186.7,
      latestPrice: 186.99,
    },
    {
      name: 'Apple Inc.',
      shortName: 'AAPL',
      high: 188.35,
      low: 186.7,
      latestPrice: 186.99,
    },
  ];

  beforeEach(() => (wrapper = shallow(<Stocks stocks={mockData} />)));
  afterEach(() => wrapper.unmount());

  test('should render correct amount of Stock Cards', () => {
    const actual = wrapper.find(StockCard).length;
    const expected = 2;
    expect(actual).toBe(expected);
  });
});
