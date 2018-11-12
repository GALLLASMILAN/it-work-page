const express = require('express');
import { Express } from 'express';
const app: Express = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

export default function buildApp(production: boolean = true): Express {
    app.use(bodyParser.json());
    app.use(cors());
    if (!production) {
        app.use(morgan('method = :method, url = :url, status = :status, contentLength :res[content-length], responseTime: :response-time ms'));
    }
    return app;
}
