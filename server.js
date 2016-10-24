const path = require('path')
const express = require('express')
const app = express()
const indexPath = path.join(__dirname, '/client/index.html')
app.use('/style', express.static(path.join(__dirname, '/client/styles')))
app.use('/', express.static(path.join(__dirname, '/client/')))
app.get('/', function (_, res) { res.sendFile(indexPath) })

app.listen(process.env.PORT || 8080);

