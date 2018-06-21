import React from 'react';
import StockCard from '../StockCard/';

const Stocks = props => <div>{props.stocks.map(stock => <StockCard {...stock} />)}</div>;

export default Stocks;
