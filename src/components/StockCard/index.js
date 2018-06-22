import React from 'react';

const StockCard = props => {
  const { name, shortName, high, low, latestPrice, change } = props;

  return (
    <section className="stock-card">
      <div className="stock-card__info">
        <div>
          <h4 className="stock-card__title">{name.length > 13 ? `${name.substring(0, 13)}...` : name}</h4>
          <p className="stock-card__short-name">{shortName}</p>
        </div>

        {change < 0 && (
          <div className="stock-card__change">
            <p className=" negative-change">
              <span className="stock-card__pointer"> &#x25bc;</span>
              {change} ({(change / latestPrice).toFixed(2)}%)
            </p>
            <p className="stock-card__price">${latestPrice}</p>
          </div>
        )}

        {change > 0 && (
          <div className="stock-card__change">
            <p className="stock-card__change positive-change">
              <span className="stock-card__pointer"> &#x25b2;</span>
              {change} ({(change / latestPrice).toFixed(2)}%)
            </p>
            <p className="stock-card__price">${latestPrice}</p>
          </div>
        )}
      </div>

      <div className="stock-card-average">
        <span className="stock-metric" style={{ top: high.toFixed(2) / 100 - change }}>
          &#x25ba;
        </span>
        <p>{high.toFixed(2)}</p>
        <p>{low.toFixed(2)}</p>
      </div>
    </section>
  );
};

export default StockCard;
