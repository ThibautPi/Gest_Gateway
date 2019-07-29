const Joi = require('joi');

module.exports = {
    validateParam: function (schema, name){
      return function (req,res,next) {
        const result = Joi.validate({ param: req['params'][name]} ,schema);
        if(result.error){
          return res.status(400).json(result.error);
        } else {
          if(!req.value)
            req.value = {};

          if(!req.value['params'])
            req.value['params'] = {};

          req.value['params'][name] = result.value.param;
          next();
        }
      }
    },

    validateBody: function (schema){
        return function(req,res,next) {
          const result = Joi.validate(req.body, schema);
          if(result.error){
            return res.status(400).json(result.error);
          }
    
          if(!req.value) {
            req.value = {};
          }
          req.value['body'] = result.value;
          next();
        }
    
      },
    
      schemas: {
        
      }
}