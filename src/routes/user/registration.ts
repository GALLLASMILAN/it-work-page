const express = require('express');
const router = express.Router();
import { Collection } from 'mongodb';

import * as mongo from '../../lib/mongo';
import { isValidUserDataRegistration } from '../../model/is-valid-user-data';

import getHash from '../../model/get-hash';
import getUser from '../../model/mongo/get-user';

router.post('/', async (req, res) => {
    try {
        const collection: Collection<any> = await mongo.collection('users');
        if (!isValidUserDataRegistration(req.body)) {
            return res.status(403).json();
        }

        if ( await getUser(req.body.email) ) {
            return res.status(403).json({
                errorMessage: 'User is already exist'
            });
        }

        const newUser = {
            name: req.body.name,
            password: getHash(req.body.password, req.body.email),
            email: req.body.email
        };

        await collection.insert(newUser);
        res.json({ newUser: { name: newUser.name, email: newUser.email } });
    } catch (error) {
        res.status(403).json({ error: error });
    }
});

export default router;
