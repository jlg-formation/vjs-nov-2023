import express from 'express';

const app = express.Router();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/articles', (req, res) => {
  res.json([{ id: 'a1', name: 'Tournevis', price: 2.99, qty: 123 }]);
});

export default app;
