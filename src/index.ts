const express = require('express');
import { Express } from 'express';
const app: Express = express();
const bodyParser = require('body-parser');

import userRouter from './routes/user/';

app.use(bodyParser.json());
app.use('/user', userRouter);
app.listen(3000);
