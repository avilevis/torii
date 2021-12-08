const { readJsonFile } = require('./fileHandler')

async function getData(fromCurrency, toCurrency, deltaMin=5){
    const data = await readJsonFile()
    const minTS = Date.now() - deltaMin * 60 * 1000;

    return Object.entries(data).map(([ts,currencyObjList])=>{
        if(!currencyObjList[fromCurrency]) return null
        if(ts < minTS) return null

        return  {
            [ts]: {
                "currency": currencyObjList[fromCurrency].currency,
                "rates": {[toCurrency]: currencyObjList[fromCurrency].rates[toCurrency]}
            }
        }
    }).filter(Boolean)
}

async function deleteData(ts,form, to) {
}

module.exports ={
    getData
}