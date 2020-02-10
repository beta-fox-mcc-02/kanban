const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const cors = require('cors')
const {test} = require('./models')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.get('/', (req,res,next)=>{
  test.findAll()
  .then(result=>{
    res.status(200).json({
      result
    })
  })
  .catch(err=>{
    console.log(err)
  })
})

app.listen(PORT, ()=>console.log('connected on ', PORT))