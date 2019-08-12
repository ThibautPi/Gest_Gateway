const express = require('express');
const router = require('express-promise-router')();

const gatewayController = require('../controllers/gateway_Gestures');
const {validateParam, validateBody, schemas} = require('../helpers/routeHelpers');
// Chaque route demande le JSON Web Token
/*
- Post est l'upload du set, il prend comme body l'ensemble du JSON Gesture set, il retourne le gesture set créé
- Get retourne l'ensemble des gesture sets lies a l'utilisateur. Il renvoit un tableau vide autrement
*/
router.route('/set')
  .post(gatewayController.postSet)
  .get(gatewayController.getSets)

/*
- Put envoie une demande de modification d'un gesture set. L'argument est l'id du gesture set et le body est constitué de name et/ou description
- Delete envoie une demande de suppression d'un gesture set. L'argument est l'id du gesture set
*/
router.route('/set/:gesture_set_id')
  .put(gatewayController.updateSet)
  .delete(gatewayController.deleteSet)

/*
- Get renvoie l'ensemble détaillé des classes d'un gesture set. L'argument est l'id du gesture set
*/
router.route('/set/:gesture_set_id/classes')
  .get(gatewayController.getSetClasses)

/*
- Put envoie une demande de modification d'un gesture class. L'argument est l'id du gesture class et le body est constitué de name et/ou description
- Delete envoie une demande de suppression d'un gesture class. L'argument est l'id du gesture class
- Get renvoie le detail d'une gesture class. L'argument est l'id du gesture class
*/
router.route('/class/:gesture_class_id')
  .get(gatewayController.getClass)
  .put(gatewayController.putClass)
  .delete(gatewayController.deleteClass)

/*
- Get renvoie l'ensemble détaillé des samples d'un gesture class. L'argument est l'id du gesture class
*/
router.route('/class/:gesture_class_id/samples')
  .get(gatewayController.getClassSamples)

/*
- Put envoie une demande de modification d'un gesture sample. L'argument est l'id du gesture sample et le body est constitué de name et/ou description
- Delete envoie une demande de suppression d'un gesture sample. L'argument est l'id du gesture sample
*/
router.route('/sample/:gesture_sample_id')
  .put(gatewayController.putSample)
  .delete(gatewayController.deleteSample)


module.exports = router;