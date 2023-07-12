const express = require('express')
var cors = require('cors')
const connecttomongo=require('./db')
connecttomongo();
const app = express()
const port = 5000
// var app = express()
app.use(cors())

 
app.use(express.json())
// Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Mynotebook listening on port http://localhost:${port}`)
})