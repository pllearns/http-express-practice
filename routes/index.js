const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Does this new route work?')
})

router.get('/cool', (req, res) => {
  res.send('Does this new cool route work?')
})

module.exports = router