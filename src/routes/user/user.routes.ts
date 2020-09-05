import  { Router } from 'express';
import  UserController from '../../controller/user';

const users = Router();

users.post('/', UserController.store);
users.get('/', UserController.index);
users.get('/:id', UserController.show);
users.put('/:id', UserController.update);
users.delete('/:id', UserController.delete);

export default users;