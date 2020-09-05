import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import {User} from "../entity/User";


class UserController {
  async index(request: Request, response: Response) {
    try {      
      const userRepository = getRepository(User);

      const users = await userRepository.find();
      return response.json(users);
    } catch (err) {
      console.log(err)
      return response.status(400).json({error: 'Error ao tentar buscar users'});
    }
  }

  async show(request: Request, response: Response) {
    try {      
      const { id } = request.params;
      const userRepository = getRepository(User);

      const user = await userRepository.findOne(id);
      return response.json(user);
    } catch (err) {
      console.log(err)
      return response.status(400).json({error: 'Error ao tentar buscar users'});
    }
  }

  async store(request: Request, response: Response) {
    try {
      const { firstName, lastName, age } = request.body;
      const userRepository = getRepository(User);

      const user = new User();
      user.firstName = firstName;
      user.lastName = lastName;
      user.age = age;
      await userRepository.save(user);
      
      return response.json(user)
    } catch (err) {
      console.log(err)
      return response.status(400).json({error: 'Error ao tentar inserir users'});
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { firstName, lastName, age } = request.body;
      const userRepository = getRepository(User);

      const user = await userRepository.findOne(id);
      user.firstName = firstName;
      user.lastName = lastName;
      user.age = age;
      await userRepository.save(user);
      
      return response.json(user)
    } catch (err) {
      console.log(err)
      return response.status(400).json({error: 'Error ao tentar inserir users'});
    }
  }


  async delete(request: Request, response: Response) {
    try {      
      const { id } = request.params;
      const userRepository = getRepository(User);

      const user = await userRepository.findOne(id);
      await userRepository.delete(user);
      return response.status(204).send();
    } catch (err) {
      console.log(err)
      return response.status(400).json({error: 'Error ao tentar buscar users'});
    }
  }
}

export default new UserController();