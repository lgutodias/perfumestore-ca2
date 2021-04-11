const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(require('./routes'));




app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});