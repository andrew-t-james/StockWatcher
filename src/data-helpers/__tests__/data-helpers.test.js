import { sanitizedStockInfo } from '../data-helpers';
import { data } from '../../mock-data/mock-data';

describe('Data helper Unit Tests', () => {
  test('should return sanitized data', () => {
    const expected = {
      change: 0.49,
      high: 188.35,
      latestPrice: 186.99,
      low: 186.7,
      name: 'Apple Inc.',
      shortName: 'AAPL',
    };
    const actual = sanitizedStockInfo(data);
    expect(actual).toEqual(expected);
  });
});
