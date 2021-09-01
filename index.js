const app=require('./configuration/server');
//configuration of file .env
require('dotenv');
//start db
require('./configuration/database');

//start server
const port=process.env.PORT || 3000;
app.listen(port,()=> console.log(`Connected on port: ${port}`));
