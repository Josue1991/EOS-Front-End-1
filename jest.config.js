module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // o 'node', según tus necesidades
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(axios)/)', // Permite que axios sea transformado
  ],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy', // Para mockear estilos si es necesario
  },
};
