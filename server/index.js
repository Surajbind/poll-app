require('dotenv').config();
const express = require('express');
const { errorHandler } = require('./handler');

const PORT = process.env.PORT;
const app = express();

app.get('/',(req,res)=>{
    res.json({hello:"Hello WOrld"});
})

app.use(errorHandler);

app.listen(PORT,()=>{
    console.log('Server started');
})