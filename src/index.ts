const express = require('express');
import { Express } from 'express';
const app: Express = express();
const bodyParser = require('body-parser');

// import userRouter from './routes/user/';
import v1Router from './routes/v1';

app.use(bodyParser.json());
app.use('/v1', v1Router);
app.listen(3000);
