const fetch = require('node-fetch');
const config = require('../configuration/index');

module.exports = {
    signIn : async function(req,res,next){
        var auth = await fetch(config.URL_AUTHENTIFICATION_SIGNIN,{ 
            method : 'POST',
            body: JSON.stringify(req.body),  
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            return {response : response.json() , status : response.status};
        })
        response = await auth.response
        res.status(auth.status).json(response);
    },
    signUp : async function(req,res,next){
        var auth = await fetch(config.URL_AUTHENTIFICATION_SIGNUP,{ 
            method : 'POST',
            body: JSON.stringify(req.body),  
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            return {response : response.json() , status : response.status};
        })
        response = await auth.response
        if(auth.status != 200)
        {
            return res.status(auth.status).json(response);
        }
        const email = req.body.email;
        await fetch(config.URL_USERS,{
            method : 'POST',
            body : JSON.stringify({email}),
            headers: { 
                'Content-Type': 'application/json',
                'authorization' : 'Bearer ' + response.token
             }
        })
        response = await auth.response
        res.status(auth.status).json(response);
    },
    googleOAuth: async function(req,res,next){
        var auth = await fetch(config.URL_AUTHENTIFICATION_GOOGLE,{ 
            method : 'POST',
            body: JSON.stringify(req.body),  
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            return {response : response.json() , status : response.status};
        })
        response = await auth.response
        res.status(auth.status).json(response);
    }
}