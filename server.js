const express = require ('express')
const app = express()
app.get('/',(req,res) => {
    res.send("hii dhanush")
})
app.listen(8000)