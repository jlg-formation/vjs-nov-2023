import express from 'express';
import { randomUUID } from 'node:crypto';
import { Article, NewArticle } from './interfaces/Article';

const app = express.Router();

const articles: Article[] = [
  { id: 'a1', name: 'Tournevis', price: 2.99, qty: 123 },
];

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  // res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/articles', (req, res) => {
  res.json(articles);
});

app.use(express.json());

app.post('/articles', (req, res) => {
  // recuperer le newArticle
  // generer id
  // stocker dans le tableau articles
  // renvoyer une reponse
  const newArticle: NewArticle = req.body;
  const newId = randomUUID();
  articles.push({ ...newArticle, id: newId });
  console.log('articles: ', articles);
  res.status(201).end();
});

export default app;
