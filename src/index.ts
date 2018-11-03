const express = require('express');
import { Express } from 'express';
const app: Express = express();

import userRouter from './routes/user';

app.use('/user', userRouter);
app.listen(3000);
