import React, { Component } from 'react';
import axios from 'axios';
import { sanitizedStockInfo } from '../../data-helpers/data-helpers';
import Search from '../Search';
import Stocks from '../Stocks';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [],
    };

    this.getStockQuotes = this.getStockQuotes.bind(this);
  }

  getStockQuotes(tickerName) {
    const self = this;
    const sanitizedTickerName = tickerName.toLowerCase();
    const url = `https://api.iextrading.com/1.0/stock/${sanitizedTickerName}/batch?types=quote`;
    axios
      .get(url)
      .then(response => sanitizedStockInfo(response.data.quote))
      .then(newStockQuote => {
        this.setState({
          stocks: [newStockQuote, ...this.state.stocks],
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { stocks } = this.state;
    return (
      <main className="wrapper">
        <h1 className="main-header">Stock Watcher</h1>
        <Search getStockQuotes={this.getStockQuotes} />
        <Stocks stocks={stocks} />
      </main>
    );
  }
}

export default Main;
