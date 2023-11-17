import express from 'express';
import serveIndex from 'serve-index';

import api from './api';
import morgan from 'morgan';

const port = 3000;
const publicDir = '.';

const app = express();

app.use(morgan('tiny'));

app.use('/api', api);

app.use(express.static(publicDir));
app.use(serveIndex(publicDir, { icons: true }));

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
