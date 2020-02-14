if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const routes = require('./routes/index')
const error = require('./middlewares/error')

const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.use('/', routes)
app.use(error)

app.listen(port, () => {
    console.log(`connected on port ${port}`)
})