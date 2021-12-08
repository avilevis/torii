module.exports = {
  msTimer: 1000 * 60, // one min
  currencyApiUrl: 'https://api.coinbase.com/v2/exchange-rates',
  currencyObjList: {
    BTC: {
      rates: ['USD', 'EUR'],
    },
    ETH: {
      rates: ['USD', 'EUR'],
    },
  },
  filename: 'data.json',
}
