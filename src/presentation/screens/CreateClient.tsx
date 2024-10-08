import React, { useState } from 'react';
import { getPosts } from '../../services/serviceClient';
import Button from '@mui/material/Button';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import InputErrorMessage from '../components/InputErrorMessage';
import SnackbarErrorMessage from '../components/MessageError';
import { useMediaQuery, useTheme } from '@mui/material';
import { FacturaServices } from '../../application/services/facturaServices';
import MyButton from '../components/myButton';
import { Factura } from '../../domain/entities/factura';

const CreateClient: React.FC = () => {
    const [valorTotal, setValorTotal] = useState('');
    const [error, setError] = useState<'numerico' | 'alfanumerico' | 'email' | undefined>(undefined);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };
    const facturaService = new FacturaServices();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const sanitizedValue = value.replace(/[^0-9.]/g, '');

        if (sanitizedValue !== value) {
            setError('numerico');
        } else {
            setError(undefined);
        }

        const parsedValue = parseFloat(sanitizedValue);
        setValorTotal(!isNaN(parsedValue) ? sanitizedValue : '');
    };

    const handleClick = async () => {
        const sanitizedValue = valorTotal.replace(/[^0-9.]/g, '');

        if (sanitizedValue !== valorTotal) {
            setError('numerico');
            setSnackbarMessage('Por favor ingrese solo números.');
            setOpenSnackbar(true);
            return;
        } else if (!valorTotal) {
            setError('numerico');
            setSnackbarMessage('Por favor ingrese un valor antes de enviar.');
            setOpenSnackbar(true);
            return;
        }

        try {
            const facturaProps = {
                invoiceValue: parseFloat(valorTotal) 
            };            
            const nuevaFactura = new Factura(facturaProps);
    
            await facturaService.postFactura(nuevaFactura);
            setSnackbarMessage(`Factura emitida con valor: ${valorTotal}`);
        } catch (error) {
            setSnackbarMessage('Error en el valor facturado');
            
        }
        setOpenSnackbar(true);
    };

    const backgroundColor = isSmallScreen ? '#825de6' : isMediumScreen ? '#b5e740' : '#f3efef';

    return (
        <Box sx={{ flexGrow: 1, backgroundColor, minHeight: '100vh' }}>
            <div className='titulo'></div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size={4}></Grid>
                <Grid size={4}>
                    <h1>Crear Factura</h1>
                    <InputLabel htmlFor="filled-adornment-amount">Valor Factura</InputLabel>
                    <FilledInput
                        id="filled-adornment-amount"
                        value={valorTotal}
                        onChange={handleInputChange}
                        placeholder="Ingrese el valor de la factura"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        error={!!error}
                    />
                    {error && <InputErrorMessage mensaje="Por favor ingrese un valor válido." tipoValidacion={error} />}

                    <MyButton text={'Pagar'} onClick={handleClick} />
                </Grid>
                <Grid size={4}></Grid>
            </Grid>
            <SnackbarErrorMessage mensaje={snackbarMessage} open={openSnackbar} onClose={handleCloseSnackbar} />
        </Box>
    );
};

export default CreateClient;
