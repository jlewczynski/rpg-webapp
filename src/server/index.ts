import express from 'express';
import { join } from 'path';
import apiRouter from './routes/api';

const app = express();
const port: number = 8888;

app.use('/api', apiRouter);
app.use(express.static(join(__dirname, 'ui')));
app.get('/*', (req, res) => {
  res.sendFile(join(__dirname, 'ui', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
