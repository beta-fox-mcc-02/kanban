require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

const PORT = process.env.PORT || 3000

const routers = require('./routes/index.js')

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(routers)

app.listen(PORT, () => {
   console.log('listening to ', PORT)
})
