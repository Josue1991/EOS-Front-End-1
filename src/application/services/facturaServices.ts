import { PostFactura } from '../../domain/useCases/facturaCase';
import { User } from '../../domain/entities/example';
import { FacturaRepositoryImpl } from '../../infrastructure/repositories/facturaRepository';
import { Factura } from '../../domain/entities/factura';

export class FacturaServices {
  private postFacturaUseCase: PostFactura;

  constructor() {
    const facturaRepository = new FacturaRepositoryImpl();
    this.postFacturaUseCase = new PostFactura(facturaRepository);
  }

  async postFactura(factura:Factura): Promise<boolean> {
    return await this.postFacturaUseCase.execute(factura);
  }
}
