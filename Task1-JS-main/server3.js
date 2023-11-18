const express=require("express");
const app=express();
const path=require("path");

app.get("/html",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})
app.listen(1909 ,()=>{
    console.log("server is running");
})