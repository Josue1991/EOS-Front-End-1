// src/presentation/components/UserCard.tsx

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { User } from '../../domain/entities/example';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Card style={{ marginBottom: 16 }}>
      <CardContent>
        <Typography variant="h6">{user.name}</Typography>
        <Typography color="textSecondary">@{user.username}</Typography>
        <Typography>{user.email}</Typography>
        <Typography>{user.phone}</Typography>
        <Typography>{user.website}</Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
