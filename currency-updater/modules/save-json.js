const fs = require('fs')
const { filename } = require('../const.js')

function saveJsonToFile(jsonData, file = filename) {
  const data = JSON.stringify(jsonData, null, 2)

  try {
    fs.writeFileSync(file, data)
  } catch (e) {
    throw new Error('problems with writing file')
  }
}

async function readJsonFile(file = filename) {
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

async function addDataToFile(data) {
  const oldData = await readJsonFile()
  const timestamp = Date.now()
  const updateData = { ...oldData, [timestamp]: data.reduce((acc, currencyObj)=>{
    Object.assign(acc, currencyObj)
    return acc
    },{})
  }

  saveJsonToFile(updateData)
}

module.exports = addDataToFile
