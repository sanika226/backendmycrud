module.exports=mongoose=>{
    var schema=mongoose.Schema(
        {
            name: String,
            email: String,
            password: String,
            cnfrmpassword:String
        }
    )
    const User=mongoose.model("user",schema)
    return User
}