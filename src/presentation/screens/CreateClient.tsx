import React, { useState } from 'react';
import { createPost } from '../../services/serviceClient';
import Button from '@mui/material/Button';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import './CreateClient.css';

import { useMediaQuery, useTheme } from '@mui/material';

const CreateClient: React.FC = () => {
    const [valorTotal, setValorTotal] = useState('');
    const [error, setError] = useState<string>('');
    const [open, setOpen] = React.useState(false);
    const [resultado, setResultado] = useState<string>('');


    const theme = useTheme(); // Usar tema para breakpoints
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Verifica si la pantalla es pequeña
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md')); // Pantalla mediana

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        // Eliminar cualquier carácter que no sea un número o un punto decimal
        const sanitizedValue = value.replace(/[^0-9.]/g, '');

        if (sanitizedValue !== value) {
            setError('Por favor ingrese solo números');
        } else {
            setError('');
        }

        const parsedValue = parseFloat(sanitizedValue);

        if (!isNaN(parsedValue)) {
            setValorTotal(sanitizedValue);
        } else {
            setValorTotal('');
        }
    };

    const handleClick = async () => {
        const sanitizedValue = valorTotal.replace(/[^0-9.]/g, '');

        if (sanitizedValue !== valorTotal) {
            return setError('Por favor ingrese solo números');
        } else {
            setError('');
        }
        if (valorTotal === undefined || valorTotal === ""){
            return setError('Por favor ingrese un valor antes de enviar');
        }

        try {
            const newPost = { total: valorTotal };
            const createdPost = await createPost(newPost);
            console.log('Post creado:', createdPost);
            setValorTotal(valorTotal);
            setOpen(true);
            setResultado("Factura Emitida")
        } catch (error) {
            console.error('Error creando el post:', error);
            setResultado("Error en el valor Facturado");
        }
    };

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                OK
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    // Define el color de fondo dependiendo del tamaño de la pantalla
    const backgroundColor = isSmallScreen ? '#825de6' : isMediumScreen ? '#b5e740' : '#f3efef';

    return (
        <Box sx={{ flexGrow: 1, backgroundColor, minHeight: '100vh' }}> {/* Aquí aplicas el color dinámico */}
            <div className='titulo'></div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size={4}>
                </Grid>
                <Grid size={4}>
                    <h1>Crear Factura</h1>
                    <InputLabel htmlFor="filled-adornment-amount">Valor Factura</InputLabel>
                    <FilledInput
                        id="filled-adornment-amount"
                        value={valorTotal}
                        onChange={handleInputChange}
                        placeholder="Ingrese el valor de la factura"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        error={!!error} // Indica si hay un error
                    />
                    {error && <div>{error}</div>}
                    <Button variant="contained" color="success" onClick={handleClick}>
                        Pagar
                    </Button>
                </Grid>
                <Grid size={4}></Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size={4}>
                </Grid>
                <Grid size={4}>
                    <label>{resultado}</label>
                </Grid>
                <Grid size={4}>
                </Grid>                
            </Grid>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={`Valor Facturado: $${valorTotal}`}
                action={action}
            />
        </Box>
    );
};

export default CreateClient;
