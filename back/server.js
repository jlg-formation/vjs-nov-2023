const express = require('express');

const port = 3000;

const app = express();

app.use((req, res, next) => {
  console.log('req', req.url);
  next();
});

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
