const express = require('express');
const router = require('express-promise-router')();

const gatewayController = require('../controllers/gateway_Profile');
const {validateParam, validateBody, schemas} = require('../helpers/routeHelpers');
// Chaque route demande le JSON Web Token!
/*
- Get retourne le profil de l'utilisateur, il retrouve son ID avec le JWT donc il ne ne nécessite aucun body/param
- Put demande une modification du profil. Ici le body se base sur le modèle de profile avec firstName,lastName,address et organization. 
*/
router.route('/')
    .get(gatewayController.GetProfile)
    .put(gatewayController.UpdateProfile)


module.exports = router;