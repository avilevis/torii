const fs = require('fs')
const { currencyFile } = require('../const.js')

const filePath = `${__dirname}/../../currency-updater/${currencyFile}`

async function readJsonFile(file = filePath) {
    try {
        const fileExist = await fs.existsSync(file)

        if (fileExist) {
            const data = await fs.promises.readFile(file, 'utf8')
            const parseData = JSON.parse(data)

            return parseData
        }
        return {}
    } catch (e) {
        throw new Error('problems with reading file')
    }
}

module.exports ={
    readJsonFile
}