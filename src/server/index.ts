import express from 'express';
import { join } from 'path';

const app = express();
const port: number = 8888;

app.get('/api/*', (req, res) => {
  res.send('Hello, API!');
});
app.use(express.static(join(__dirname, 'ui')));
app.get('/*', (req, res) => {
  res.sendFile(join(__dirname, 'ui', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
