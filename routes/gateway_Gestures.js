const express = require('express');
const router = require('express-promise-router')();

const gatewayController = require('../controllers/gateway_Gestures');
const {validateParam, validateBody, schemas} = require('../helpers/routeHelpers');

router.route('/set')
  .post(gatewayController.postSet)
  .get(gatewayController.getSets)


router.route('/set/:gesture_set_id')
  .put(gatewayController.updateSet)
  .delete(gatewayController.deleteSet)

router.route('/set/:gesture_set_id/classes')
  .get(gatewayController.getSetClasses)

router.route('/class/:gesture_class_id')
  .get(gatewayController.getClass)
  .put(gatewayController.putClass)
  .delete(gatewayController.deleteClass)

router.route('/class/:gesture_class_id/samples')
  .get(gatewayController.getClassSamples)

router.route('/sample/:gesture_sample_id')
  .put(gatewayController.putSample)
  .delete(gatewayController.deleteSample)


module.exports = router;