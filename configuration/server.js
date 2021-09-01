const express=require('express');
const app = express();
const morgan= require('morgan');
//settings
app.set('port',process.env.PORT || 3000);
//middleware
app.use(express.json());
app.use(express.urlencoded({extend: true}));
app.use(morgan("dev"));
//routes
app.get('/',(req,res)=>{
    res.send('Welcome to Api Songs');
});
app.use('/song',require('../routes/song'));

module.exports=app;