const mongoose= require('mongoose');
const uri=`mongodb+srv://nicox11:okmijnuhb@cluster0.o9y9e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const options={
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
}

mongoose.connect(uri,options)
.then(()=>console.log('Connected to MongoDB'))
.catch((err)=>console.log(err))
