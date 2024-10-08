// IconComponent.tsx
import React from 'react';
import { IconButton } from '@mui/material';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import { IconType } from 'react-icons';
import { useTheme } from '@mui/material/styles';
import { PaletteColor, Palette } from '@mui/material/styles/createPalette';

type ThemeColor = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

interface IconComponentProps {
  iconName: string;
  onClick?: () => void;
  size?: string | number;
  color?: ThemeColor | string;
}

const iconSets: { [key: string]: { [key: string]: IconType } } = {
  Fa: FaIcons,
  Md: MdIcons,
  Ai: AiIcons,
  // Agrega otros conjuntos de iconos si es necesario
};

function isPaletteColor(color: unknown): color is PaletteColor {
  return typeof color === 'object' && color !== null && 'main' in color;
}

const IconComponent: React.FC<IconComponentProps> = ({ iconName, onClick, size, color }) => {
  const theme = useTheme();

  // Obtiene el prefijo para determinar el conjunto de iconos
  const prefix = iconName.slice(0, 2);
  const icons = iconSets[prefix];

  // Verifica si el conjunto de iconos existe
  if (!icons) {
    console.warn(`Conjunto de iconos con prefijo '${prefix}' no encontrado`);
    return null;
  }

  // Obtiene el componente del icono dinámicamente
  const Icon = icons[iconName as keyof typeof icons] as IconType;

  if (!Icon) {
    console.warn(`Icono '${iconName}' no encontrado en el conjunto '${prefix}'`);
    return null;
  }

  // Determina el color del icono
  let iconColor: string | undefined;

  if (color) {
    const paletteColor = theme.palette[color as keyof Palette];

    if (isPaletteColor(paletteColor)) {
      // Aquí TypeScript sabe que paletteColor es PaletteColor y tiene 'main'
      iconColor = paletteColor.main;
    } else {
      // Asumimos que es un color CSS válido
      iconColor = color;
    }
  }

  return (
    <IconButton onClick={onClick}>
      <Icon size={size} color={iconColor} />
    </IconButton>
  );
};

export default IconComponent;
