const express=require('express')
const app=express()

const cors=require('cors')
const port=8787

var corsOptions={
    origin:"http://localhost:3000"
}
app.use(cors(corsOptions))
app.use(express.json())

// app.get('/',(req,res)=>{
//     res.send('My First Backend Program with node express js')
// })

const db=require("./app/Addtask/Addindex")

db.mongoose
    .connect(db.url,{
        useUnifiedTopology: true,
    })
        .then(()=>{
            console.log("Connected to database...");     
        })

require("./app/Addtask/Addtask.routes")(app)

app.listen(port,()=>{
    console.log(`server started on ${port}`)
})


