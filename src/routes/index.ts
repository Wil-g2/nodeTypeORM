import { Router } from 'express';
import projects from './projects/projects.routes';
import users from './user/user.routes';

const routes = Router();

routes.use('/projects', projects);
routes.use('/users', users);

export default routes;