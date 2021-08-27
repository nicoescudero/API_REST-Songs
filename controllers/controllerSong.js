const controller={};
const Song=require('../models/songs');

controller.getAll=async(req,res)=>{
    const songs=await Song.find();
    (songs)?
    res.json({message: 'Succes', songs}):
    res.status(404).json({message: 'Error, no songs found'});
}


controller.getTrack=async (req,res)=>{
    const song=await Song.findOne({track: req.body.track});
    (song)?
    res.json({message: 'Song found', song}):
    res.status(404).json({message: 'Error, song not found'});
}

controller.getById=async (req,res)=>{
    const song=await Song.findById({_id: req.params.songId});
    (song)?
    res.json(song):
    res.status(404).json({message: 'Error, song not found'});
}

controller.saved=async (req,res)=>{
    const newSong = new Song({
        track: req.body.track,
        artist: req.body.artist,
        album: req.body.album
    });
    await newSong.save();
    (newSong)?
        res.json({message: 'Song Saved', newSong}):
        res.status(401).json({message: 'Error, song not saved'});        
}

controller.put=async (req,res)=>{
    const song=await Song.findById({_id: req.params.songId});
    if(song){
        song.track=req.body.track;
        song.artist=req.body.artist;
        song.album=req.body.album;
        song.save();
        res.json({message:'Updated', song});
    }else
    res.status(404).json({message: 'song not found'});

}

controller.delete=async (req,res)=>{
    const song=await Song.findById({_id: req.params.songId});
    if(song){
        await song.remove();
        res.json({message: 'Song deleted'});
    }
    else
    res.status(404).json({message: 'Error, song not found'});
}




module.exports=controller;