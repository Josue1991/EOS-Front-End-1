// src/application/interfaces/IUserRepository.ts

import { User } from '../../domain/1.entities/example';

export interface IUserRepository {
  getUsers(): Promise<User[]>;
}
