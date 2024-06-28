const mongoose=require("mongoose")
const serverConfig=require("./serverConfig")
// the below function is used to connect db
async function connectDB(){
    try{
        await mongoose.connect(serverConfig.DB_URL)
        console.log("connection successfull")
    }catch(error){
        console.log("there are some erroe ${error}"+error)
    }

}
module.exports=connectDB