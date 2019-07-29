const express = require('express');
const router = require('express-promise-router')();

const gatewayController = require('../controllers/gateway_Gestures');
const {validateParam, validateBody, schemas} = require('../helpers/routeHelpers');



module.exports = router;