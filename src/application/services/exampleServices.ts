// src/application/services/UserService.ts

import { GetUsers } from '../../domain/useCases/exampleUseCase';
import { UserRepositoryImpl } from '../../infrastructure/repositories/exampleRepository';
import { User } from '../../domain/entities/example';

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
