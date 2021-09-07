const app=require('./configuration/server');
//get .env
require('dotenv').config();
//start db
require('./configuration/database');
//start server
const server=app.listen(app.get('port'),console.log(`Connected on port: ${app.get('port')}`));
module.exports={app,server};