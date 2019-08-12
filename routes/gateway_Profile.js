const express = require('express');
const router = require('express-promise-router')();

const gatewayController = require('../controllers/gateway_Profile');
const {validateParam, validateBody, schemas} = require('../helpers/routeHelpers');

router.route('/')
    .get(gatewayController.GetProfile)
    .put(gatewayController.UpdateProfile)


module.exports = router;