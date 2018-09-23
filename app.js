const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const app = express();

let port = 1234;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log('Server is up and running on port numner ' + port);
});