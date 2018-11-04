import * as express from 'express';
const v1router = express.Router();

import userRouter from './user';

v1router.use('/user', userRouter);

export default v1router;