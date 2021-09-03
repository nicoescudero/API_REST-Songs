const { Router }= require('express');
const route= Router();
const controller=require('../controllers/controllerSong');
const {check}=require('express-validator');


route.get('/',controller.getAll);
route.get('/track/:name',controller.getTrack);
route.get('/id/:songId',controller.getById);

route.post('/',
[
    check('track','The track name must not be empty').notEmpty(),
    check('album','The album name must not be empty').notEmpty(),
    check('artist','The artist name must not be empty').notEmpty(),
],controller.saved);

route.put('/id/:songId',[
    check('songId','Enter a correct id by parameter').notEmpty().isMongoId(),
    check('track','The track name must not be empty').notEmpty(),
    check('album','The album name must not be empty').notEmpty(),
    check('artist','The artist name must not be empty').notEmpty()
],controller.put);

route.delete('/id/:songId',[
    check('songId','Enter a correct id by parameter').notEmpty().isMongoId(),
],controller.delete);

module.exports=route;