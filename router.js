const express = require('express')
const router = express.Router()
const path = require('path')

router.post('/backend/feedback', async (req, res, next) => {
  const data = req.body

  res.send(data)
})

router.get('/backend', async (req, res) => {
  const records = 'AVI'

  res.send(records)
})

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
})

module.exports = router
