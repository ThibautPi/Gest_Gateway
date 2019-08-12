const express = require('express');
const router = require('express-promise-router')();

const gatewayController = require('../controllers/gateway_Authentification');
const {validateParam, validateBody, schemas} = require('../helpers/routeHelpers');

router.route('/signin')
    .post(gatewayController.signIn)

router.route('/signup')
    .post(gatewayController.signUp)

router.route('/google')
    .post(gatewayController.googleOAuth)

module.exports = router;