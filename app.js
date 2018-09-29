'use strict';
//reference from:https://ubuverse.com/introduction-to-node-js-api-unit-testing-with-mocha-and-chai/
const express = require('express');
const bodyParser = require('body-parser');
const DEFAULT_COLORS = ['RED','BLUE','WHITE'];
// initialize our express app
const app = express();
const port = 1234;

app.use(bodyParser.json({
  limit: '100k',
}));

let colors = [].concat(DEFAULT_COLORS);

app.get('/colors', function(req, res, next) {
  res.json({
    results: colors
  });
});

app.post('/colors', function(req, res, next) {
  if (req.is('application/json') && typeof req.body.color === 'string') {
    let color = req.body.color.trim().toUpperCase();

    if (color && colors.indexOf(color) < 0) {
      colors.push(color);

      // 201 Created
      return res.status(201).send({
        results: colors
      });
    }
  }

  res.status(400).send(); // 400 Bad Request
});

app.listen(port, () => {
  console.log(`Server is up and running on port numner:${port}`);
});

//important to export the express instance for testing
module.exports = app;