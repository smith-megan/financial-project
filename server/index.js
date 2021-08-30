const express=require('express')
const cors=require('cors')
const path = require('path')


app=express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res)=>{
  res.sendFile(path.join(__dirname, "../client/index.html"))
})

PORT=process.env.PORT || 5050
app.listen(PORT, ()=>{console.log(`up and running on ${PORT}`)})