module.exports=mongoose=>{
    var schema=mongoose.Schema(
        {
           taskName:String,
           taskInfo:String
        }
    )
    const addtasks=mongoose.model("addtask",schema)
    return addtasks
}