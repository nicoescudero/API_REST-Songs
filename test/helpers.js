const supertest=require('supertest');
const {app}=require('../index');
const api=supertest(app); 
const initialSongs=[
    {
        track:'song1',
        artist:'arist1',
        album:'album1'
    },
    {
        track:'song2',
        artist:'artist2',
        album:'album2'
    }
];

const fullSong={
    track:"song3",
    artist:"artist3",
    album:'album3'
}
const invalidSong={
    track:"song3",
    artist:"artist3",
    album:'album3',
    year:2021
}

const incompleteSong={
    track:"song3",
    artist:'',
    album:''
}


const get_oneSong=async()=>{
    const response=await api.get('/song');
    const id = response.body.songs[0];
    return id;
}

module.exports={api,initialSongs,get_oneSong,fullSong,incompleteSong,invalidSong}