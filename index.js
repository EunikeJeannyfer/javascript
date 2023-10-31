//HTTP RESPONSE

const express = require('express')
const app = express()
const port = 3000
const routers = require('./router')
const swaggerJSON = require('./openapi.json')
const swaggerUI = require('swagger-ui-express')

//untuk handle post req.body (middleware)
app.use(express.json())

app.use(routers)
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON))

app.get('/', (req, res) => res.send('Hello World'))
app.listen(port, () => 
    console.log(`Example app listening at http://localhost:${port}`))