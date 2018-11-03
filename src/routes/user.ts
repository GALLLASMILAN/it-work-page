const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ ok: 'user' });
});

router.get('/one', (req, res) => {
    res.json({ ok: 'userone' });
});

router.post('/sign', (req, res) => {

});

router.post('register', (req, res) => {

});

export default router;

