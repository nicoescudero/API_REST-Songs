const {Schema , model} =require('mongoose');
const songSchema= new Schema({
    track:{
        type: 'string',
        required:true
    },
    artist:{
        type:'string',
        required:true
    },
    album:{
        type:'string',
        required:true
    },
});

module.exports= model('Song',songSchema);