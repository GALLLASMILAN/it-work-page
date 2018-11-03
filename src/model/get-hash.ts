import config from '../config';
const crypto = require('crypto');

export default function getHash(password: String, email: String) {
    const secret = config.secure.secretKey;
    const hash = crypto
        .createHmac('sha256', `${secret}${email}`)
        .update(password)
        .digest('hex');
       
    return hash;    
}
