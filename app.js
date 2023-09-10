const express = require('express');

const app = express();
const router = require("./src/routes/api")


app.use('/api',router);

//undefine route
app.use('*',(req,res)=> {
    res.status(404).json({status:"fail",data:"Not Found"})
})

module.exports = app;