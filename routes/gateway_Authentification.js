const express = require('express');
const router = require('express-promise-router')();

const gatewayController = require('../controllers/gateway_Authentification');
const {validateParam, validateBody, schemas} = require('../helpers/routeHelpers');

/*
- Post envoie une demande de connexion. Le body doit contenir les attributs email et password
*/
router.route('/signin')
    .post(gatewayController.signIn)
/*
- Post envoie une demande de création de compte. Le body doit contenir les attributs email et password
*/
router.route('/signup')
    .post(gatewayController.signUp)
/*
- Post envoie une demande de connexion. Le body n'est pas de notre ressort vu que c'est un google Oauth. Le clientId est 
  855465042567-s8fcoavtdfe6isvpaev27lcik41c2ero.apps.googleusercontent.com
*/
router.route('/google')
    .post(gatewayController.googleOAuth)

module.exports = router;