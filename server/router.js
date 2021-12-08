const express = require('express')
const router = express.Router()

const {getData} = require('./modules/currency')

router.delete('/currency', async (req, res) => {
  const {ts} = req.body

  // delete
  res.send()
})

router.get('/currency', async (req, res) => {
  const {from, to, delta} = req.query

  if(!from || !to) return res.status(400).send('data missing')

  const data = await getData(from, to, delta)

  res.send(data)
})

router.get('/', (req, res) => {
  res.send()
})

module.exports = router
