require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { errorHandler } = require('./handler');
const db = require('./models');
const routes = require('./routes');

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.json({hello:"Hello World"});
})

app.use('/api/auth',routes.auth);

app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Server started  ${PORT}`);
})