import { IFacturaRepository } from '../../application/interfaces/facturaInterface';
import { Factura } from '../entities/factura';

export class PostFactura {
  private facturaRepository: IFacturaRepository;

  constructor(facturaRepository: IFacturaRepository) {
    this.facturaRepository = facturaRepository;
  }

  async execute(factura:Factura): Promise<boolean> {
    console.log("Objeto:", factura);    
    return await this.facturaRepository.postFactura(factura);
  }
}
