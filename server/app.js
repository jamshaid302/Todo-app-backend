const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const corsOptions ={
    origin:'*',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//this get method is to check that project is successfully deploy on heroku
// but in package.json file you should add this ["start": "node index.js"] line in script otherwise the project is not working on server
app.get('/',(req,res)=>{
    res.send('Deploy Project Successfully');
})

const list = require("../controller/lists/list");
app.use('/lists',list);

const listTodo = require("../controller/lists/todos");
app.use('/todo',listTodo);

module.exports = app