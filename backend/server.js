const express = require('express')
const cors = require('cors')
const PORT = 8080
const app = express()

const Ice = require('./routes/icecreama')
const Murk = require('./routes/murukkus')
const Dbb = require('./routes/db_con')
const Db = require('./config/db')


Db.connect()

app.use(cors())

// app.use(cors({
//     origin: 'http://localhost:3002' // or '*' to allow all origins
//   }));

app.use('/', Ice)
app.use('/murukkus', Murk)
app.use(express.json())
app.use('/post', Dbb)
app.use('/get', Dbb)

  

app.listen(PORT, ()=>{
    console.log("server run successful on " + PORT)
})

//get all student details


