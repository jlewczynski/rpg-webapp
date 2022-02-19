import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => {
  res.json([
    { body: 'note 1' },
    { body: 'note 2' },
  ]);
});
userRouter.get('/:id', (req, res) => {
  res.json({ body: 'note 1'});
});
userRouter.post('/:id', (req, res) => {
  res.json({ message: 'ok' });
});
userRouter.put('/', (req, res) => {
  res.json({ id: '3' });
});
userRouter.delete('/:id', (req, res) => {
  res.json({ message: 'ok' });
});

export default userRouter;