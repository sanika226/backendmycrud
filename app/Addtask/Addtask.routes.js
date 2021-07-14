module.exports=app=>{
    const tasks=require("../Addtask/Addtask.controller")
                                          
    var router=require("express").Router()

    router.post("/",tasks.create)

    router.get("/getAllData",tasks.findAll)

    router.get("/getSearchOne/:query",tasks.searchTask)

    router.delete("/deleteData/:query",tasks.delete)

    router.put("/updateData/:query",tasks.updateTask)

    app.use("/api/tasks",router)
}