const db=require("../Addtask/Addindex")

const addtasks=db.tasks

exports.create=(req,res)=>{   

    console.log(req.body);
    
    const addTask=new addtasks({
        taskName:req.body.taskName,
        taskInfo:req.body.taskInfo 
    })

    addTask.save(addTask)
        .then(data=>{
            res.send(data)
        })
}
exports.findAll=(req,res)=>{
      addtasks.find()
      .then(data=>{
          res.send(data);
      })
}

exports.searchTask=(req,res)=>{
    var query=req.params.query
    console.log(query);

    addtasks.find({        
        $text:{$search:query}
    })
    
    .then(data=>{
        res.json(data)
    })
}

exports.updateTask=(req,res)=>{
         var query=req.params.query
         console.log(query)
         console.log(req.body)
         addtasks.findByIdAndUpdate(query,req.body)
         .then(data=>{
             res.json(data);
         })
}

exports.delete=(req,res)=>{
     const query=req.params.query
     addtasks.findByIdAndDelete(query)
     .then(data=>{
         res.json(data)
        
     })
     
}