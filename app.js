const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')

app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).json('Hello Gaes')
})

app.listen(PORT, () => {
  console.log('This App Run on Port: ' + PORT)
})