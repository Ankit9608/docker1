import express from "express"
const app=express()
app.get("/",(req,res)=>{
    res.send("Hello from express server")
})
app.listen(8080,()=>{
    console.log("conneted")
})