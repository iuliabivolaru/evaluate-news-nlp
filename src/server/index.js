const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var aylien = require('aylien_textapi');
const dotenv = require('dotenv');
dotenv.config();

var aylienApi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express();

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Sentiment analysis app listening on port 8080!')
});

app.post('/sentimentAnalysis', function postHandler(request, response) {
    aylienApi.sentiment({ 
        url: request.body.url,
        mode: "document"
      }, function(error, postReponse) {
        if (error === null) {
            response.send(postReponse);
        }
    });
});