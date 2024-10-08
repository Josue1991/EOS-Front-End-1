// src/infrastructure/repositories/UserRepositoryImpl.ts

import { IUserRepository } from '../../application/interfaces/exampleInterface';
import apiClient from '../apis/exampleApi';
import { User, UserProps } from '../../domain/entities/example';

export class UserRepositoryImpl implements IUserRepository {
  async getUsers(): Promise<User[]> {
    try {
      const response = await apiClient.get<UserProps[]>('/users');
      // Mapear los datos obtenidos al modelo de dominio
      return response.data.map((userData) => new User(userData));
    } catch (error) {
      throw new Error('Error al obtener usuarios del API');
    }
  }
}
