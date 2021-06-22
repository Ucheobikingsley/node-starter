const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("App started")
})

app.post("/add", (req, res) => {
   res.send("Post Activated on App")
})
app.listen(3000, ()=>{
    console.log("App running on port 3000")
})