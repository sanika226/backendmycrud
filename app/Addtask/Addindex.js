const AddConfig=require("./Adddb.config")

const mongoose=require("mongoose")

const db={}

db.mongoose=mongoose
db.url=AddConfig.url
db.tasks=require("../Addtask/Addmodel")(mongoose)

module.exports=db