import React, { Component } from 'react';
import Search from '../Search';
import Stocks from '../Stocks';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [
        {
          name: 'Apple Inc.',
          shortName: 'AAPL',
          high: 188.35,
          low: 185.93,
          latestPrice: 185.24,
          change: -1.26,
        },
        {
          name: 'Alphabet Inc.',
          shortName: 'GOOG',
          high: 1177.295,
          low: 1153.83,
          latestPrice: 1161.44,
          change: -8.4,
        },
      ],
    };
  }

  render() {
    const { stocks } = this.state;
    return (
      <main className="wrapper">
        <h1 className="main-header">Stock Watcher</h1>
        <Search />
        <Stocks stocks={stocks} />
      </main>
    );
  }
}

export default Main;
