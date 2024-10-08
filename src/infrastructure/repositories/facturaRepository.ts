// src/infrastructure/repositories/UserRepositoryImpl.ts

import { IFacturaRepository } from '../../application/interfaces/facturaInterface';
import apiClient from '../apis/exampleApi';
import { User, UserProps } from '../../domain/entities/example';
import { Factura } from '../../domain/entities/factura';

export class FacturaRepositoryImpl implements IFacturaRepository {
  async postFactura(factura:Factura): Promise<boolean> {
    try {
      const response = await apiClient.post<boolean>('recordBilling',factura);
      
      return response.data;
    } catch (error) {
      throw new Error('Error:'+ error);
    }
  }
}
