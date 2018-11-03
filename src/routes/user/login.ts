const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
import config from '../../config/';

router.post('/', (req, res) => {
    if (!('name' in req.body) || !('password' in req.body)) {
        res.status(403).json();
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
});

export default router;