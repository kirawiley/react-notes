const express = require('express')
const path = require('path')
const app = express()

const publicPath = path.join(__dirname, '/public')
app.use(express.static(publicPath))

app.listen(1996, () => {
  console.log('Listening on port 1996!')
})
