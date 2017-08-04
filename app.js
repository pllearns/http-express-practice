const express = require('express')

const app = express()

const routes = require('./routes')

app.use('/', routes)

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})