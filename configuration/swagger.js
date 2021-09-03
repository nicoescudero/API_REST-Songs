const options={
    definition:{
        openapi: '3.0.0',
        info:{
            title:'Songs API-REST',
            version: '1.0.0',
            description: 'A song Api'
        },
        servers:[{url:'http://localhost:3000'}]
    },
    apis:['./docs/*.js']
};
module.exports = {options};