
import { Express } from 'express';
import buildApp from './build-app';
import config from './config/';

// environment
const app: Express = buildApp(config.server.production);
const port = process.env.PORT || config.server.port;

// routes
import v1Router from './routes/v1';
app.use('/v1', v1Router);

// run server
app.listen(port, function() {
    console.log(`application running on port ${port}`);
});
