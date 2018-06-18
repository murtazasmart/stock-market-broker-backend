/**
 * Main application routes
 */

import ping from './api/ping'
import view from './api/view'
import user from './api/user'
import transaction from './api/transaction'
import * as express from 'express'

const routes = (app: express.Application): void => {
  // Insert routes below
  app.use('/api/ping', ping);
  app.use('/api/views', view);
  app.use('/api/user', user);
  app.use('/api/transaction', transaction);

  // All other routes should 404
  app.route('/*')
  .get((req: express.Request, res: express.Response) => {
    res.sendStatus(404)
  });
};

export default routes
