const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const patternRoutes = require('./server/controllers/PatternController')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(patternRoutes)

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
