const { Router }= require('express');
const route= Router();
const {check, validator} = require('express-validator');
var controller=require('../controllers/controllerSong');

route.get('/',controller.getAll);
route.get('/track',controller.getTrack);
route.get('/id/:songId',controller.getById);
route.post('/',controller.saved);
route.put('/id/:songId',controller.put);
route.delete('/id/:songId',controller.delete);

module.exports=route;