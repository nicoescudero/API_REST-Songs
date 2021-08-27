const app=require('./configuration/server');
//configuration of file .env
require('dotenv');
//start db
require('./configuration/database');

//start server
app.listen(app.get('port'),()=> console.log(`Connected on port: ${app.get('port')}`));
