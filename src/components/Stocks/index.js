import React from 'react';
import StockCard from '../StockCard/';

const Stocks = props => (
  <section className="stocks-container">
    {props.stocks.map(stock => <StockCard key={stock.shortName} {...stock} />)}
  </section>
);

export default Stocks;
