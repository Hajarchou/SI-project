const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/api/data', (req, res) => {
  res.json([1, 2, 3]);
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use(express.static(path.join(__dirname, '/components/build')));

app.listen(port, () => {
  console.log(`App listening  on port ${port}`);
});