// src/presentation/screens/CreateClient.test.tsx

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CreateClient from '../presentation/screens/CreateClient';
import { FacturaServices } from '../application/services/facturaServices';
import SnackbarErrorMessage from '../presentation/components/MessageError';

// Mock de FacturaServices
jest.mock('../../application/services/facturaServices', () => {
    return {
        FacturaServices: jest.fn().mockImplementation(() => ({
            postFactura: jest.fn(),
        })),
    };
});

describe('CreateClient Component', () => {
    let mockPostFactura: jest.Mock;

    beforeEach(() => {
        // Obtenemos la implementación simulada de FacturaServices
        const facturaService = new FacturaServices();
        mockPostFactura = facturaService.postFactura;

        render(<CreateClient />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should render the CreateClient component', () => {
        expect(screen.getByText(/Crear Factura/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Valor Factura/i)).toBeInTheDocument();
    });

    test('should display error message for non-numeric input', () => {
        const input = screen.getByLabelText(/Valor Factura/i);
        
        fireEvent.change(input, { target: { value: 'abc' } });

        expect(screen.getByText(/Por favor ingrese un valor válido./i)).toBeInTheDocument();
    });

    test('should call postFactura with correct value', async () => {
        const input = screen.getByLabelText(/Valor Factura/i);
        
        // Simulamos un valor válido
        fireEvent.change(input, { target: { value: '100' } });
        
        // Simulamos hacer clic en el botón de "Pagar"
        const button = screen.getByRole('button', { name: /Pagar/i });
        fireEvent.click(button);
        
        expect(mockPostFactura).toHaveBeenCalledWith(expect.objectContaining({ invoiceValue: 100 }));
    });

    test('should show snackbar with error message when postFactura fails', async () => {
        mockPostFactura.mockRejectedValueOnce(new Error('Error en el valor facturado'));
        const input = screen.getByLabelText(/Valor Factura/i);
        
        fireEvent.change(input, { target: { value: '100' } });
        
        const button = screen.getByRole('button', { name: /Pagar/i });
        fireEvent.click(button);
        
        expect(await screen.findByText(/Error en el valor facturado/i)).toBeInTheDocument();
    });

    test('should show snackbar with success message when postFactura is successful', async () => {
        const input = screen.getByLabelText(/Valor Factura/i);
        
        fireEvent.change(input, { target: { value: '100' } });
        
        const button = screen.getByRole('button', { name: /Pagar/i });
        fireEvent.click(button);
        
        expect(await screen.findByText(/Factura emitida con valor: 100/i)).toBeInTheDocument();
    });
});
