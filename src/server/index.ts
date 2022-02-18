import express from 'express';
import { join } from 'path';
import cors from 'cors';

const app = express();
const port: number = 8888;

console.log(process.env);

app.get('/api/*', cors(), (req, res) => {
  res.send('Hello, API!');
});
app.use(express.static(join(__dirname, 'ui')));
app.get('/*', (req, res) => {
  res.sendFile(join(__dirname, 'ui', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
