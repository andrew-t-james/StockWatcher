import React from 'react';
import moxios from 'moxios';
import { mount, shallow } from 'enzyme';
import Main from '../components/Main';
import Search from '../components/Search';
import ToastMessage from '../components/ToastMessage';

describe('App integrations tests', () => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://api.iextrading.com/1.0/stock/appl/batch?types=quote', {
      status: 200,
      response: {
        name: 'Apple Inc.',
        shortName: 'AAPL',
        high: 188.35,
        low: 185.93,
        latestPrice: 185.24,
        change: -1.26,
      },
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('can fetch and render a list of items', async done => {
    const mockFunc = jest.fn();
    const app = mount(<Main />);
    const search = shallow(<Search getStockQuotes={mockFunc} />);

    app.find('form').simulate('submit', {
      preventDefault: jest.fn(),
      target: {
        reset: jest.fn(),
      },
    });

    await app.instance().getStockQuotes('AAPL');

    app.setState({
      stocks: [
        {
          name: 'Apple Inc.',
          shortName: 'AAPL',
          high: 188.35,
          low: 185.93,
          latestPrice: 185.24,
          change: -1.26,
        },
      ],
    });

    moxios.wait(() => {
      app.update();

      expect(app.find('.stock-card').length).toEqual(1);

      done();
      app.unmount();
    });
  });

  test('should handle invalid input', async done => {
    const mockFunc = jest.fn();
    const app = mount(<Main />);
    const search = shallow(<Search getStockQuotes={mockFunc} />);
    moxios.stubRequest('https://api.iextrading.com/1.0/stock//batch?types=quote', {
      status: 200,
      response: {
        name: 'Apple Inc.',
        shortName: 'AAPL',
        high: 188.35,
        low: 185.93,
        latestPrice: 185.24,
        change: -1.26,
      },
    });

    app.find('form').simulate('submit', {
      preventDefault: jest.fn(),
      target: {
        reset: jest.fn(),
      },
    });

    await app.instance().getStockQuotes(' ');

    app.setState({
      stocks: [],
    });

    moxios.wait(() => {
      app.update();

      expect(app.find(ToastMessage).length).toEqual(1);

      done();
      app.unmount();
    });
  });
});
