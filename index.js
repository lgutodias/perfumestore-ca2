const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(require('./routes'));



const dbURI = "mongodb+srv://master:QK4rLkiIMjHrMlCt@cluster0.ymrn8.mongodb.net/perfume_store?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('MongoDB is successfully connected'))
        .catch((err) => console.log(err));


app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});