require('dotenv')
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000
const routes = require('./router')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(PORT,()=>console.log(`TransJakarta jauh dekat tetap Rp. ${(PORT + 500).toLocaleString()}`))