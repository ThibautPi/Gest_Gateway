const fetch = require('node-fetch');
const config = require('../configuration/index');

module.exports = {
    postSet: async function(req,res,next){
        const body = req.body
        res.status(200).json("ok");
        var name= body.name;
        var description = body.description;
        var set = await fetch(config.URL_GESTURES_SET,{ 
            method : 'POST', 
            body : JSON.stringify({name,description}),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        const set_id = set.newG_Set._id;
        const g_class = body.gesture_classes;
        for(var i in g_class)
        {
            name = g_class[i].name;
            description = g_class[i].description;
            var classes = await fetch(config.URL_GESTURES_CLASSES,{ 
            method : 'POST', 
            body : JSON.stringify({name,description,gesture_set_id : set_id}),
            headers: { 'Content-Type': 'application/json' }
            })
            .then(res => res.json())
            var class_id = classes.newG_class._id;
            var g_samples = g_class[i].samples
            for(var j =0 ; j < g_samples.length; j++){

                name = g_samples[j].name
                description = g_samples[j].description
                user_id = g_samples[j].user_id
                strokes = g_samples[j].strokes
                sample_type = g_samples[j].sample_type
                var sample = await fetch(config.URL_GESTURES_SAMPLES,{ 
                method : 'POST', 
                body : JSON.stringify({name,description,gesture_class_id : class_id,user_id,strokes,sample_type}),
                headers: { 'Content-Type': 'application/json' }
                })
                .then(res => res.json())

            }
        }
        console.log("SET DONE");
    },
    getSets: async function(req,res,next){

        var set = await fetch(config.URL_GESTURES_SET,{ 
            method : 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        res.status(200).json(set);
    },
    updateSet: async function(req,res,next){
        const url = config.URL_GESTURES_SET + "/" + req.params.gesture_set_id;
        var set = await fetch(url,{
            method : 'PUT',
            body: JSON.stringify(req.body),  
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        res.status(201).json(set);
    },

    deleteSet: async function(req,res,next){
        const url = config.URL_GESTURES_SET + "/" + req.params.gesture_set_id;
        var set = await fetch(url,{
            method : 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        res.status(201).json(set); 
    },

    getSetClasses: async function(req,res,next){
        const url = config.URL_GESTURES_SET + "/" + req.params.gesture_set_id+"/classes";
        var set = await fetch(url,{
            method : 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        res.status(200).json(set); 
    },

    getClass:async function(req,res,next){
        const url = config.URL_GESTURES_CLASSES + "/" + req.params.gesture_class_id;
        var set = await fetch(url,{
            method : 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        res.status(200).json(set); 
    },

    putClass: async function(req,res,next){
        const url = config.URL_GESTURES_CLASSES + "/" + req.params.gesture_class_id;
        var set = await fetch(url,{
            method : 'PUT',
            body: JSON.stringify(req.body),  
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        res.status(201).json(set);
    },

    deleteClass: async function(req,res,next){
        const url = config.URL_GESTURES_CLASSES + "/" + req.params.gesture_class_id;
        var set = await fetch(url,{
            method : 'DELETE', 
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        res.status(201).json(set);
    },

    getClassSamples: async function(req,res,next){
        const url = config.URL_GESTURES_CLASSES + "/" + req.params.gesture_class_id+"/samples";
        var set = await fetch(url,{
            method : 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        res.status(200).json(set); 
    },

    putSample: async function(req,res,next){
        const url = config.URL_GESTURES_SAMPLES + "/" + req.params.gesture_sample_id;
        var set = await fetch(url,{
            method : 'PUT',
            body: JSON.stringify(req.body),  
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        res.status(201).json(set);
    },

    deleteSample: async function(req,res,next){
        const url = config.URL_GESTURES_SAMPLES + "/" + req.params.gesture_sample_id;
        var set = await fetch(url,{
            method : 'DELETE', 
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        res.status(201).json(set);
    },



}