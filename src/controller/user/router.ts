import { Router } from 'express';
import { createUser, getUserById } from './controller';

const userRouter = Router();

userRouter.get('/', getUserById);
userRouter.post('/', createUser);

export default userRouter;
