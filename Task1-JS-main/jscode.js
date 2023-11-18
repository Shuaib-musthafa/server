const express=require("express");
const app=express();
const path=require("path");

app.get("/shibu",(req,res)=>{
    res.sendFile(path.join(__dirname,"1.html"));
})
app.get("/shuaib",(req,res)=>{
    res.sendFile(path.join(__dirname,"2.html"));
})
app.get("/sm",(req,res)=>{
    res.sendFile(path.join(__dirname,"3.html"));
})
app.listen(1909 ,()=>{
    console.log("server is running");
})