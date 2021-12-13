const express = require('express')
const app = express()
const port = 8080
app.post('/', function (req, res) {
    res.send('Got a POST request')
})

app.listen(port)