const express = require("express");
const app = express();

require("dotenv").config();
const Port =process.env.PORT || 4000;

app.use(express.json());

const todoRouter = require("./routes/todos");
app.use("/api/v1" , todoRouter);

app.listen(Port ,  ()=>{
    console.log(`Server started successfully at ${Port}`)
})

const dbconnect = require("./config/database");
dbconnect();

app.get("/" , (req , res) =>{
    res.send(`<h1>This is home Page</h1>`)
})