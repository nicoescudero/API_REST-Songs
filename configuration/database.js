const mongoose= require('mongoose');
const uri='mongodb://localhost/Songs'
const options={
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
}

mongoose.connect(uri,options)
.then(()=>console.log('Connected to MongoDB'))
.catch((err)=>console.log(err))
