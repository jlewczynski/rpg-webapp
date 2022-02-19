import { Router } from "express";

const characterRouter = Router();

characterRouter.get('/', (req, res) => {
  res.json([
    { body: 'note 1' },
    { body: 'note 2' },
  ]);
});
characterRouter.get('/:id', (req, res) => {
  res.json({ body: 'note 1'});
});
characterRouter.post('/:id', (req, res) => {
  res.json({ message: 'ok' });
});
characterRouter.put('/', (req, res) => {
  res.json({ id: '3' });
});
characterRouter.delete('/:id', (req, res) => {
  res.json({ message: 'ok' });
});

export default characterRouter;