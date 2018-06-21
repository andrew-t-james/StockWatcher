import React from 'react';
import StockCard from '../StockCard/';

const Stocks = props => (
  <section className="stocks-container">
    {!props.stocks.length && <h2 className="stocks-container-title">No Stocks yet!</h2>}
    {props.stocks.length > 0 && props.stocks.map(stock => <StockCard key={stock.shortName} {...stock} />)}
  </section>
);

export default Stocks;
