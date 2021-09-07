const {server}=require('../index');
const mongoose=require('../configuration/database');
const {api,initialSongs,get_oneSong,fullSong,incompleteSong,invalidSong}=require('./helpers');
const Song=require('../models/songs');

beforeEach(async() => {
    await Song.deleteMany({});
    for (const element of initialSongs) {
        let newSong=new Song(element);
        await newSong.save();
    };
})

describe('Get song',()=>{
    test('All Songs are returned at json and status 200',async()=>{
        await api.get('/song')
        .expect(200)
        .expect('Content-Type',/json/);
    })
    
    test('Minimun songs saved',async()=>{
        const response=await api.get('/song');
        expect(response.body.songs).toHaveLength(initialSongs.length);
    })
    
    test('Get song by name',async()=>{
        await api.get('/song/track/song2')
        .expect(200)
        .expect('Content-Type',/application\/json/);
    })

    test('Get unsaved song by name',async()=>{
        await api.get('/song/track/HelloWorld')
        .expect(404)
        .expect('Content-Type',/application\/json/);
    })

    test('Get song by id',async()=>{
        const song = await get_oneSong();
        await api.get(`/song/id/${song._id}`)
        .expect(200)
        .expect('Content-Type',/json/);
    })

    test('Get song, id not found',async()=>{
        const song = await get_oneSong();
        await api.get(`/song/id/0000b00deab000b0a0000000`)
        .expect(404)
        .expect('Content-Type',/json/);
    })
})

describe('Save song',()=>{
    test('Save song without full data',async()=>{
        await api.post('/song').send(incompleteSong)
        .expect(422);
    })
    
    test('Save succesfully',async()=>{
        await api.post('/song').send(fullSong)
        .expect(201);
    })

    test('Save song with invalid content',async()=>{
        await api.post('/song').send(invalidSong)
        .expect(400);
    })
})


describe('Update song',()=>{
    test('Updating a song successfully',async()=>{
    const song = await get_oneSong();
    await api.put(`/song/id/${song._id}`)
    .send(fullSong)
    .expect(201)
    .expect('Content-Type',/json/);
    })

    test('Update song without full data',async()=>{
        const song = await get_oneSong();
        await api.put(`/song/id/${song._id}`)
        .send(incompleteSong)
        .expect(422)
        })
        
    test('Update song with invalid content',async()=>{
        const song = await get_oneSong();
        await api.put(`/song/id/${song._id}`)
        .send(invalidSong)
        .expect(400)
    })
    
    test('Update song, id not found',async()=>{
        await api.put(`/song/id/0000b00deab000b0a0000000`)
        .send(fullSong)
        .expect(404)
    })
})

describe('Delete song',()=>{
    test('Delete song successfully',async()=>{
    const song = await get_oneSong();
    await api.delete(`/song/id/${song._id}`)
    .expect(200)
    })

    test('Delete song not found ',async()=>{
    await api.delete(`/song/id/0000b00deab704b8a0000000`)
    .expect(404)
    })
    test('Delete song with invalid id',async()=>{
        await api.delete(`/song/id/1234jestTest1234`)
        .expect(422)
    })
})

afterAll(done=>{
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close()
    //Closing server
    server.close();
    done();
})
