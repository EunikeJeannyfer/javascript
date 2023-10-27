// const os = require('os');
// const luasSegitiga = require('./segitiga.js')

// console.log("Free Memory", os.freemem());
// console.log(luasSegitiga(4,2))

//HTTP RESPONSE

const express = require('express')
const app = express()
const port = 3000
const routers = require('./router')

//untuk handle post req.body 
app.use(express.json())

app.use(routers)

app.get('/', (req, res) => res.send('Hello World'))
app.listen(port, () => 
    console.log(`Example app listening at http://localhost:${port}`))