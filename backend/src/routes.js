import { Router } from 'express';
import multer from 'multer';

import AvatarController from './app/controllers/AvatarController';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import authMiddleware from './app/middlewares/auth';
import validateSessionStore from './app/validators/SessionStore';
import validateUserStore from './app/validators/UserStore';
import validateUserUpdate from './app/validators/UserUpdate';
import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);


routes.post('/sessions', validateSessionStore, SessionController.store); // Done

routes.use(authMiddleware);

routes.post('/users', validateUserStore, UserController.store); // Done
routes.put('/users', validateUserUpdate, UserController.update); // Done

routes.post('/avatars', upload.single('file'), AvatarController.store); // Pending

export default routes;
