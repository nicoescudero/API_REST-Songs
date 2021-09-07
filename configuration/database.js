const mongoose= require('mongoose');
const {MONGO_DB_URI,MONGO_DB_URI_TEST,NODE_ENV}=process.env
let uri='';

if((NODE_ENV === 'development')||(NODE_ENV==='test'))
uri=MONGO_DB_URI_TEST;
else uri=MONGO_DB_URI;

const options={
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
}

mongoose.connect(uri,options)
.then(()=>console.log('Connected to MongoDB'))
.catch((err)=>console.log(err))

module.exports = mongoose;
