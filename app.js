const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/APIPGateway', {useNewUrlParser: true});

const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json({limit:'50mb',extended:true}));

// Routes
app.use('/gestures',require('./routes/gateway_Gestures'));
app.use('/auth',require('./routes/gateway_Authentification'));
app.use('/profile',require('./routes/gateway_Profile'));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port);
console.log('Server listening at '+port);
