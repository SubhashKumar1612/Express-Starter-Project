const express=require("express")

const serverConfig=require('./config/serverConfig')
const connectDB=require("./config/dbConfig")
const app=express();

app.listen(serverConfig.PORT,async()=>{
    await connectDB();
    console.log(`server started at ${serverConfig.PORT}......`)
})
//ZqZbLRwZEoQMv3Pn   subhashkumarr1612