// CreateClient.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';  // Para añadir matchers como `toBeInTheDocument`
import CreateClient from '../presentation/screens/CreateClient';
import { createPost } from '../services/serviceClient'; // Importa la función para mockear

// Mock de createPost para simular la API
jest.mock('../services/serviceClient', () => ({
    createPost: jest.fn()
}));

describe('CreateClient Component', () => {
    it('renders without crashing', () => {
        render(<CreateClient />);

        // Verificar que se renderiza el título correctamente
        const title = screen.getByText(/Crear Factura/i);
        expect(title).toBeInTheDocument();
    });

    it('shows an error message when submitting an empty form', () => {
        render(<CreateClient />);

        // Simular el clic en el botón de "Pagar"
        const pagarButton = screen.getByText(/Pagar/i);
        fireEvent.click(pagarButton);

        // Verificar que se muestra el mensaje de error
        const errorMessage = screen.getByText(/Por favor ingrese un valor antes de enviar/i);
        expect(errorMessage).toBeInTheDocument();
    });

    it('submits form with valid input', async () => {
        // Mockear la respuesta de la función createPost
        (createPost as jest.Mock).mockResolvedValue({ id: 1, total: "100" });

        render(<CreateClient />);

        // Encontrar el campo de texto e ingresar un valor
        const inputField = screen.getByPlaceholderText(/Ingrese el valor de la factura/i);
        fireEvent.change(inputField, { target: { value: '100' } });

        // Simular clic en el botón de pagar
        const pagarButton = screen.getByText(/Pagar/i);
        fireEvent.click(pagarButton);

        // Verificar que createPost fue llamada con el valor correcto
        expect(createPost).toHaveBeenCalledWith({ total: "100" });

        // Verificar que se muestra el mensaje de éxito en el Snackbar
        const snackbarMessage = await screen.findByText(/Valor Facturado: \$100/i);
        expect(snackbarMessage).toBeInTheDocument();
    });

    it('displays error for invalid input', async () => {
        render(<CreateClient />);
    
        // Encontrar el campo de texto e ingresar un valor no numérico
        const inputField = screen.getByPlaceholderText(/Ingrese el valor de la factura/i);
        fireEvent.change(inputField, { target: { value: 'abc' } });
    
        // Simular clic en el botón de pagar
        const pagarButton = screen.getByText(/Pagar/i);
        fireEvent.click(pagarButton);
        
        // Usar findByText que espera a que el mensaje de error aparezca
        const errorMessage = await screen.findByText(/Por favor ingrese un valor antes de enviar/i);
        expect(errorMessage).toBeInTheDocument();
    });
    
});
