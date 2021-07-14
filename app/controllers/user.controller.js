const db=require("../models")

const User1=db.users

exports.create=(req,res)=>{

    console.log(req.body);
    
    const user=new User1({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        cnfrmpassword:req.body.cnfrmpassword
    })

    user.save(user)
        .then(data=>{
            res.send(data)
        })
    }