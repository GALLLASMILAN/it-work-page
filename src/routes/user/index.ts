const express = require('express');
const router = express.Router();

import oneUserRouter from './one';
import loginUserRouter from './login';
import registrationUserRouter from './registration';

router.use('/login', loginUserRouter);
router.use('/one', oneUserRouter);
router.use('/registration', registrationUserRouter);

export default router;
