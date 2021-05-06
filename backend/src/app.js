import './bootstrap';

import cors from 'cors';
import express from 'express';
import path from 'path';
import Youch from 'youch';
import 'express-async-errors';

import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use((req, res, next) => {
      console.log(`[${req.method}] ${req.url}`);

      return next();
    });

    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(
      '/avatars',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }

}

export default new App().server;
