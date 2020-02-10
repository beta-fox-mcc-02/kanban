const express = require('express')
const routes = require('./routes')
const app = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(routes)

// tambahin handle error

app.listen(port, () => console.log(`App listening on port ${port}!`))
