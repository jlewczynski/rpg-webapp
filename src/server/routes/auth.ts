import { Router } from "express";

const authRouter = Router();

authRouter.post('/login', (req, res) => {
  res.json({ message: 'ok' });
});
authRouter.post('/logout', (req, res) => {
  res.json({ message: 'ok' });
});

export default authRouter;