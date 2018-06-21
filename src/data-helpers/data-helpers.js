export const sanitizedStockInfo = stock => ({
  name: stock.companyName,
  shortName: stock.symbol,
  high: stock.high,
  low: stock.low,
  latestPrice: stock.latestPrice,
  change: stock.change,
});
