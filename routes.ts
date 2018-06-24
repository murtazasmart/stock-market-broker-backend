/**
 * Main application routes
 */

import ping from './api/ping'
import view from './api/view'

import * as cors from "cors"

import user from './api/user'
import transaction from './api/transaction'
import * as express from 'express'

const routes = (app: express.Application): void => {


  // Use CORS
  app.use(cors());
  

  // Insert routes below
  app.use('/api/ping', ping);
  app.use('/api/views', view);
  app.use('/api/user', user);
  app.use('/api/transaction', transaction);


  app.route('/')
  .get((req: express.Request, res: express.Response) => {
    res.status(200).json({message: "Welcome"});
  });


  // All other routes should 404
  app.route('/*')
  .get((req: express.Request, res: express.Response) => {
    res.sendStatus(404)
  });
};

export default routes
