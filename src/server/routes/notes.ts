import { Router } from "express";

const notesRouter = Router();

notesRouter.get('/', (req, res) => {
  res.json([
    { body: 'note 1' },
    { body: 'note 2' },
  ]);
});
notesRouter.get('/:id', (req, res) => {
  res.json({ body: 'note 1'});
});
notesRouter.put('/', (req, res) => {
  res.json({ message: 'ok' });
});
notesRouter.post('/', (req, res) => {
  res.json({ id: '3' });
});
notesRouter.delete('/:id', (req, res) => {
  res.json({ message: 'ok' });
});

export default notesRouter;