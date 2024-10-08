// src/application/services/UserService.ts

import { GetUsers } from '../../domain/4.useCases/exampleUseCase';
import { UserRepositoryImpl } from '../../infrastructure/3.repositories/exampleRepository';
import { User } from '../../domain/1.entities/example';

export class UserService {
  private getUsersUseCase: GetUsers;

  constructor() {
    const userRepository = new UserRepositoryImpl();
    this.getUsersUseCase = new GetUsers(userRepository);
  }

  async getUsers(): Promise<User[]> {
    return await this.getUsersUseCase.execute();
  }
}
