const path = require('path');
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 8000;
// app.set('view engine', 'html');

app.use(express.static(path.resolve(__dirname, 'views')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(require('./routes'));

// app.get('/', function(req, res) {

//     res.redirect('/perfumes');

// });

// app.get('/get/html', function(req, res) {

//     res.writeHead(200, {'Content-Type': 'text/html'}); //We are responding to the client that the content served back is HTML and the it exists (code 200)

// });



const dbURI = "mongodb+srv://master:QK4rLkiIMjHrMlCt@cluster0.ymrn8.mongodb.net/perfume_store?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('MongoDB is successfully connected'))
        .catch((err) => console.log(err));


app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});