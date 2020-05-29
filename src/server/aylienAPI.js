var aylien = require('aylien_textapi');
const dotenv = require('dotenv');
dotenv.config();
let aylienResponse;
var aylienApi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

aylienApi.sentiment({
    'text': 'John is a very good football player!'
  }, function(error, response) {
    if (error === null) {
        console.log(response);
        aylienResponse = response;
    }
});

module.exports = aylienResponse;