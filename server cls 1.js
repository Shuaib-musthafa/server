const express = require("express");
const app =express();
const { MangoClient } = require("mangodb");

const url="mongodb+srv://shuaibmusthafam:<password>@cluster0.ppfv5sn.mongodb.net/?retryWrites=true&w=majority"

const dbName ="test";
let db=""

async function connectDb(){
    try{
        const client =await MangoClient.connect(url);
        console.log("connected to MangoDB");
        db= client.db(dbname);
    }
    catch (error){
        console.log(error);

    }
}
connectDb().then(()=>{
    app.listen(3000,()=>{
        console.log("server is running");
    })
})

app.get("/",async(req,res)=>{
    const data ={name:"etho", username : "therla"};
    const result = await db.collection("user_sample").insertOne(data);
    console.log("data inserted");
    res.send("data inserted");
})