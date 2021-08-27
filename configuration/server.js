const express=require('express');
const app = express();
const morgan= require('morgan');
//settings
app.set('port',process.env.PORT || 3000);
//middleware
app.use(express.json());
app.use(express.urlencoded({extend: false}));
app.use(morgan("dev"));
//routes
app.use('/song',require('../routes/song'));

module.exports=app;