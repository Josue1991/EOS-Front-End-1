module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks', 'jsx-a11y'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
    ],
    rules: {
        // Prohibir el uso de 'class' en JSX
        'react/no-unknown-property': ['error', { ignore: ['class'] }],
        // Prohibir el uso del atributo 'style' en JSX
        'react/forbid-dom-props': ['error', { forbid: ['style'] }],
        '@typescript-eslint/explicit-module-boundary-types': 'off', // No requiere especificar tipos de retorno en funciones
        '@typescript-eslint/no-explicit-any': 'warn', // Advierte sobre el uso de 'any'
        'react/prop-types': 'off', // No requiere 'prop-types' con TypeScript
        'no-unused-vars': 'off', // Desactiva la regla básica
        '@typescript-eslint/no-unused-vars': ['error'], // Activa la regla de TypeScript
        'react/jsx-no-target-blank': 'warn', // Advierte sobre seguridad en enlaces
        'react-hooks/exhaustive-deps': 'warn', // Advierte sobre dependencias en hooks
        'jsx-a11y/anchor-is-valid': 'warn', // Mejora la accesibilidad
        'eqeqeq': ['error', 'always'],
        'arrow-parens': ['error', 'always'],
        'no-var': 'error',
        'prefer-const': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  