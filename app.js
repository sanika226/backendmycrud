const express=require('express')
const app=express()

const port=8585

app.get("/",(req,res)=>{
    res.send("welcome world node express js framework")

})
app.listen(port,()=>{
    console.log(`server started on ${port}`)

})
