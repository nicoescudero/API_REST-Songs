/**
 * @swagger
 *  components:
 *   schemas:
 *    Song:
 *     type: object
 *     required:
 *      - track
 *      - artist
 *      - album
 *     properties:
 *      id:
 *       type: string
 *       description: id generated automatically
 *      track:
 *       type: string
 *       description: name of song
 *      artist:
 *       type: string
 *       description: name of artist
 *      album:
 *       type: string
 *       description: name of album
 *     example:
 *      id: 23ih42iuh4i25bi2ul4h5
 *      track: Sliver
 *      artist: Nirvana
 *      album: Incesticide
 * 
 *    SongRequirements:
 *     type: object
 *     properties:
 *      track:
 *       type: string
 *      artist:
 *       type: string
 *      album:
 *       type: string
 *     example:
 *      track: ""
 *      artist: ""
 *      album: ""
 *   parameters:
 *    songId:
 *     in: path
 *     name: songId
 *     required: true
 *     description: id of song
 *     schema:
 *      type: string
 *    name:
 *     in: path
 *     name: name
 *     required: true
 *     description: name of song
 *     schema:
 *      type: string
 *   responses:
 *    InvalidForm:
 *     description: Error Unprocessable Entity
 *     type: object
 *     content:
 *      application/json:
 *       example:
 *        errors: []
 *    NotFound:
 *     description: Songs not found
 *     type: object
 *     content:
 *      application/json:
 *       example:
 *        message: Error, song not found
 *    BadRequest:
 *     description: Bad Request
 *     type: object
 *     content:
 *      application/json:
 *       example:
 *        message: Invalid Form
 *    Success:
 *     description: Successful Operation
 *     type: object
 *     content:
 *      application/json:
 *       example:
 *        message: Success
 *        id: 23ih42iuh4i25bi2ul4h5
 *        track: Sliver
 *        artist: Nirvana
 *        album: Incesticide
 *        
 * tags: 
 *  name: Songs
 *  description: Song Data
 */

/**
 * @swagger
 * /song:
 *  get: 
 *   summary: Return a song list
 *   tags: [Songs]
 *   responses:
 *    200:
 *     $ref: "#components/responses/Success"
 *    404:
 *     $ref: "#components/responses/NotFound"
 */
/**
 * @swagger
 * /song/track/{name}:
 *  get:
 *   summary: Return a song by name
 *   tags: [Songs]
 *   parameters:
 *    - $ref: "#components/parameters/name"
 *   responses:
 *    200:
 *     $ref: "#components/responses/Success"
 *    404:
 *     $ref: "#components/responses/NotFound"
 */
/**
 * @swagger
 * /song/id/{songId}:
 *  get:
 *   summary: Return a song by id
 *   tags: [Songs]
 *   parameters:
 *    - $ref: "#components/parameters/songId"
 *   responses:
 *    200:
 *     $ref: "#components/responses/Success"
 *    404:
 *     $ref: "#components/responses/NotFound"
 */

/**
 * @swagger
 * /song:
 *  post:
 *   summary: Save a song
 *   tags: [Songs]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: "#components/schemas/SongRequirements"
 *   responses:
 *    201:
 *     $ref: "#components/responses/Success"
 *    400:
 *     $ref: "#components/responses/BadRequest"
 *    422:
 *     $ref: "#components/responses/InvalidForm"
 */
/**
 * @swagger
 * /song/id/{songId}:
 *  put:
 *   summary: Update a song by id
 *   tags: [Songs]
 *   parameters:
 *    - $ref: "#components/parameters/songId"
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: "#components/schemas/SongRequirements"
 *   responses:
 *    201:
 *     $ref: "#components/responses/Success"
 *    400:
 *     $ref: "#components/responses/BadRequest"
 *    404:
 *     $ref: "#components/responses/NotFound"
 *    422:
 *     $ref: "#components/responses/InvalidForm"
 */
/**
 * @swagger
 * /song/id/{songId}:
 *  delete:
 *   summary: Delete a song by id
 *   tags: [Songs]
 *   parameters:
 *    - $ref: "#components/parameters/songId"
 *   responses:
 *    200:
 *     description: Song Deleted
 *     content:
 *      application/json:
 *       example:
 *        message: Song deleted
 *    404:
 *     $ref: "#components/responses/NotFound"
 */