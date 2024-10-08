export interface FacturaProps {
    invoiceValue: number;
}

export class Factura {
    invoiceValue : number;

    constructor(props: FacturaProps) {
        this.invoiceValue = props.invoiceValue;
    }
}
