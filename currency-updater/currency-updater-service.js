const queryCurrencyList = require('./modules/currency-query')
const addDataToFile = require('./modules/save-json')
const { msTimer } = require('./const.js')

setInterval(() => {
  queryCurrencyList().then(jsonData => {
    addDataToFile(jsonData)
  })
}, msTimer)
