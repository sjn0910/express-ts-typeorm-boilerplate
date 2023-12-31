import { Router } from 'express';
import { createUser, getUserById, getUsersByAge } from './controller';

const userRouter = Router();

userRouter.get('/', getUserById);
userRouter.get('/:age', getUsersByAge);
userRouter.post('/', createUser);

export default userRouter;
