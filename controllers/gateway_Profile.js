const fetch = require('node-fetch');
const config = require('../configuration/index');

module.exports = {
    GetProfile : async function(req,res,next){
        var profile = await fetch(config.URL_USERS,{
            method : 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'authorization' : req.headers.authorization
                }
            })
            .then(response => {
                return {response : response.json() , status : response.status};
            })
            response = await profile.response
            res.status(profile.status).json(response);
    },
    UpdateProfile : async function(req,res,next){
        var profile = await fetch(config.URL_USERS,{
            method : 'PUT',
            body: JSON.stringify(req.body),
            headers: { 
                'Content-Type': 'application/json',
                'authorization' : req.headers.authorization
                }
            })
            .then(response => {
                return {response : response.json() , status : response.status};
            })
            response = await profile.response
            res.status(profile.status).json(response);
    },

}