const express = require ('express')
const { relative } = require('path/posix')
const app = express()
app.get('/',(req,res) => {
    res.send("hii dhanush")
})
const product = [
    {
        id : 1,
        name :"Dhanush"
    },
    {
        id :2,
        name:"ravi",
    },
    {
        id :3,
        name:"rahu"

    },
]
app.get('/product',(req,res)=>{
    res.json(product)
})
app.get('/product/:id',(req,res)=>{
    const newData = product.filter(item => item.id.tostring()=== req.params.id);
    return res.send(newData)
})
app.listen(8000)