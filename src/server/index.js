const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const aylienAPIResponse = require('./aylienAPI.js');
var aylien = require('aylien_textapi');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.static("dist"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

console.log(__dirname);

app.get("/", function (req, res) {
    res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
});

let aylienResponse;
var aylienApi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.post("/data", function postHandler(request, response) {
    let body = request.body;
    console.log(body);
    aylienApi.sentiment({
        'text': body
      }, function(error, res) {
        if (error === null) {
            console.log(res);
            response.send({post: "successful"});
        }
    });
});