import js from '@eslint/js';
import jest from 'eslint-plugin-jest';
import globals from 'globals';

export default [
  // Базовая конфигурация
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
        ...globals.jest
      }
    },
    rules: {
      ...js.configs.recommended.rules,
    }
  },

  // Конфигурация для Jest тестов
  {
    files: ['**/*.test.js'],
    plugins: {
      jest
    },
    rules: {
      ...jest.configs.recommended.rules,
      'jest/prefer-expect-assertions': 'off'
    },
    languageOptions: {
      globals: {
        ...globals.jest
      }
    }
  },

  // Игнорируемые файлы и папки
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'coverage/**'
    ]
  }
];