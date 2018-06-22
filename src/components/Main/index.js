import React, { Component } from 'react';
import axios from 'axios';
import { sanitizedStockInfo } from '../../data-helpers/data-helpers';
import Search from '../Search';
import Stocks from '../Stocks';
import ToastMessage from '../ToastMessage';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [],
      hasError: false,
    };

    this.getStockQuotes = this.getStockQuotes.bind(this);
  }

  getStockQuotes(tickerName) {
    const sanitizedTickerName = tickerName.toLowerCase();
    const url = `https://api.iextrading.com/1.0/stock/${sanitizedTickerName}/batch?types=quote`;
    axios
      .get(url)
      .then(response => sanitizedStockInfo(response.data.quote))
      .then(newStockQuote => {
        this.setState({
          stocks: [newStockQuote, ...this.state.stocks],
          hasError: false,
        });
      })
      .catch(error => {
        this.setState({ hasError: true });
      });
  }

  render() {
    const { stocks, hasError } = this.state;

    return (
      <main className="wrapper">
        <section className="header">
          <h1 className="main-header">Stock Watcher</h1>
        </section>
        <Search getStockQuotes={this.getStockQuotes} />
        <Stocks stocks={stocks} />
        {hasError && <ToastMessage />}
      </main>
    );
  }
}

export default Main;
