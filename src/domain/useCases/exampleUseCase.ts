// src/domain/useCases/GetUsers.ts

import { IUserRepository } from '../../application/interfaces/exampleInterface';
import { User } from '../entities/example';

export class GetUsers {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(): Promise<User[]> {
    return await this.userRepository.getUsers();
  }
}
