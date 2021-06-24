const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const db = require("./models")
const port = 8081

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded();

db.sequelize.sync().then(() => {
   
    console.log("User table created");
    
})
app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})