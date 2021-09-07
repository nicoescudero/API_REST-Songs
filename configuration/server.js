const express=require('express');
const app = express();
const morgan= require('morgan');
const swaggerJSDoc=require('swagger-jsdoc');
const swaggerUI=require('swagger-ui-express');
const {options}=require('../configuration/swagger');
//settings
app.set('port',process.env.PORT || 3000);
//middlewares
app.use(express.json());
//app.use(express.urlencoded({extend: true}));
app.use(morgan("dev"));
//routes
app.get('/',(req,res)=>{
    res.send('Welcome to Api Songs');
});
app.use('/song',require('../routes/song'));
//swagger configuration
const spec=swaggerJSDoc(options);
app.use('/docs',swaggerUI.serve,swaggerUI.setup(spec));

module.exports=app;