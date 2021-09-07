const controller={};
const Song=require('../models/songs');
const {validationResult} = require('express-validator');

controller.getAll=async(req,res)=>{
    const songs=await Song.find();
    (songs)?
    res.json({message: 'Succes', songs}):
    res.status(404).json({message: 'Error, song not found'});
}

controller.getTrack=async (req,res)=>{
    const song=await Song.findOne({track: req.params.name});
    (song)?
    res.json({message: 'Succes', song}):
    res.status(404).json({message: 'Error, song not found'});
}

controller.getById=async (req,res)=>{
    const song=await Song.findById({_id: req.params.songId});
    (song)?
    res.json({message: 'Succes',song}):
    res.status(404).json({message: 'Error, song not found'});
}

controller.saved=async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json({ errors: errors.array() })
    if(Object.keys(req.body).length<4)
    {
        const newSong = new Song({
            track: req.body.track,
            artist: req.body.artist,
            album: req.body.album
        });
        await newSong.save();
        res.status(201).json({message: 'Song Saved', newSong});
    }
    else res.status(400).json({message: 'Error, invalid content'});   
}

controller.put=async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty())
        return res.status(422).json({errors: errors.array()});
    if(Object.keys(req.body).length<4){
        const song=await Song.findById({_id: req.params.songId});
        if(song){
            const {track,artist,album} = req.body;
            song.track=track;
            song.artist=artist;
            song.album=album;
            song.save();
            res.status(201).json({message:'Updated', song});
        }else
        res.status(404).json({message: 'Error, song not found'});
    }else
    res.status(400).json({message: 'Invalid Form'});    
    
}

controller.delete=async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(422).json({errors: errors.array()});
    const song=await Song.findById({_id: req.params.songId});
    if(song){
        await song.remove();
        res.json({message: 'Song deleted'});
    }
    else
    res.status(404).json({message: 'Error, song not found'});
}

module.exports=controller;