import { Router } from "express";
import cors from 'cors';
import authRouter from "./auth";
import notesRouter from "./notes";
import characterRouter from "./character";
import userRouter from "./user";

const apiRouter = Router();

apiRouter.use(cors());

apiRouter.use('/auth', authRouter);
apiRouter.use('/user', userRouter);
apiRouter.use('/character', characterRouter);
apiRouter.use('/notes', notesRouter);
apiRouter.get('/*', (req, res) => {
  res.sendStatus(404);
});

export default apiRouter;