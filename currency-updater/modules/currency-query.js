const axios = require('axios')
const { currencyApiUrl, currencyObjList } = require('../const.js')

function queryCurrency(currency = 'BTC') {
  return axios
    .get(`${currencyApiUrl}?currency=${currency}`)
    .then(response => {
      if (response.status !== 200) throw new Error('currency api error')

      return currencyFormatter(response.data.data)
    })
    .catch(error => {
      console.log(error)
    })
}

async function queryCurrencyList() {
  const currencyList = Object.keys(currencyObjList)
  return Promise.all(currencyList.map(async currency => {
    return {
      [currency]: await queryCurrency(currency)
    }
  }))
}

function currencyFormatter(rawData) {
  const currencyObj = {
    currency: rawData.currency,
    rates: {},
  }

  //if (rawData.currency !== currency) throw new Error(`rawData is not include the relevant currency: ${currency}`)
  currencyObjList[currencyObj.currency].rates.forEach(rate => {
    if (!rawData.rates[rate]) throw new Error(`rate not exist -> ${rate} in ${currencyObj.currency}`)

    currencyObj.rates[rate] = rawData.rates[rate]
  })

  return currencyObj
}

module.exports = queryCurrencyList
