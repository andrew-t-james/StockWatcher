import React, { Component } from 'react';
import './Main.scss';
import Search from '../Search/';
import Stocks from '../Stocks/';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [
        {
          date: '20180620',
          minute: '09:30',
          label: '09:30 AM',
          high: 186.68,
          low: 186.315,
          average: 186.536,
          volume: 2884,
          notional: 537970.58,
          numberOfTrades: 32,
          marketHigh: 186.7,
          marketLow: 186.29,
          marketAverage: 186.387,
          marketVolume: 716492,
          marketNotional: 133544697.2213,
          marketNumberOfTrades: 2021,
          open: 186.33,
          close: 186.52,
          marketOpen: 186.39,
          marketClose: 186.55,
          changeOverTime: 0,
          marketChangeOverTime: 0,
        },
        {
          date: '20180620',
          minute: '15:59',
          label: '3:59 PM',
          high: 186.535,
          low: 186.38,
          average: 186.422,
          volume: 3800,
          notional: 708401.865,
          numberOfTrades: 37,
          marketHigh: 186.59,
          marketLow: 186.33,
          marketAverage: 186.442,
          marketVolume: 441735,
          marketNotional: 82358204.4718,
          marketNumberOfTrades: 3169,
          open: 186.535,
          close: 186.51,
          marketOpen: 186.56,
          marketClose: 186.5,
          changeOverTime: -0.0006111420851739306,
          marketChangeOverTime: 0.0002950849576419322,
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
