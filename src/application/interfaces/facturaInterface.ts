import { User } from '../../domain/entities/example';
import { Factura } from '../../domain/entities/factura';

export interface IFacturaRepository {
  postFactura(factura:Factura): Promise<boolean>;
}
