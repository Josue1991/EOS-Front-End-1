// src/application/interfaces/IUserRepository.ts

import { User } from '../../domain/entities/example';

export interface IUserRepository {
  getUsers(): Promise<User[]>;
}
