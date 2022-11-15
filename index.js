const app = require('./server/app');
require('dotenv').config();

//server
const port = process.env.PORT || 2022;
app.listen(port,function () {
    console.log("Listening at port",port);
});
module.exports = app