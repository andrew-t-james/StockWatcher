import React, { Component } from 'react';
import Search from '../Search/';
import Stocks from '../Stocks/';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [],
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
