const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
import config from '../../../config/';
import { isValidUserDataLogin } from '../../../model/is-valid-user-data';

import getUser from '../../../model/mongo/get-user';
import getHash from '../../../model/get-hash';

router.post('/', async (req, res) => {
    try {
        if (!isValidUserDataLogin(req.body)) {
            return res.status(403).json();
        }
        const user = await getUser(req.body.email);

        if (!user) {
            return res.status(403).json({
                errorMessage: 'User not found'
            });
        }
        if (user.password !== getHash(req.body.password, req.body.email)) {
            return res.status(403).json({
                errorMessage: 'Password not correct'
            });
        }

        const token = jwt.sign(
            {
                name: req.body.name
            },
            config.secure.secretKey,
            { expiresIn: '3 hours' }
        );
        res.json({
            token
        });
    } catch (err) {
        res.status(403).json({
            errorMessage: 'Api not run'
        });
    }
});

export default router;
