const express = require('express');
const https = require('https');

const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/films', (req, res) => {
  const url = 'https://swapi.dev/api/films';

  https.get(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
      data += chunk;
    });
    response.on('end', () => {
      res.setHeader('Content-Type', 'application/json');
      res.send(data);
    });
  }).on('error', (error) => {
    console.error(error);
    res.status(500).send('Internal Server Error');
  });
});

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});
// //send a get request send a GET request on postman http://localhost:3000/films
