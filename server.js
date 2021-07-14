const express = require('express')
const app = express()

const cors = require('cors')
const port = 8787

var corsOptions = {
    origin: "http://localhost:3000"
}

app.use(cors(corsOptions))
app.use(express.json())

//File Uploading

var multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
var upload = multer({ storage: storage })



app.post('/add', upload.single('image'), (req, res) => {
    console.log(req.file)
    res.send("upload successfull")
})


// app.get('/',(req,res)=>{
// res.send('My First Backend Program with node express js')
// })

const db = require("./app/models")
db.mongoose
    .connect(db.url, {
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to database...");
    })

require("./app/routes/user.routes")(app)

app.listen(port, () => {
    console.log(`server started on ${port}`)
})


