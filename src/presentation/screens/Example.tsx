// src/presentation/screens/UserListScreen.tsx

import React, { useEffect, useState } from 'react';
import { UserService } from '../../application/services/exampleServices';
import UserCard from '../components/exampleUseCard';
import { Container, Typography } from '@mui/material';
import { User } from '../../domain/entities/example';
import MyButton from '../components/myButton';

const userService = new UserService();

const UserListScreen: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Función para obtener los usuarios
    const fetchUsers = async () => {
      try {
        const data = await userService.getUsers();
        setUsers(data);
      } catch (error) {
        console.error(error);
        // Manejo de errores (mostrar mensaje al usuario, etc.)
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <Container>
        <Typography>Cargando usuarios...</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" style={{ margin: '20px 0' }}>
        Lista de Usuarios
      </Typography>
      <MyButton text={'Prueba'} onClick={() => {
              console.log('Prueba');
          }} />
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </Container>
  );
};

export default UserListScreen;
