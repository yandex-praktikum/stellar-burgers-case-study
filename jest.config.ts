import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.{test,spec}.{ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/src/setup-tests.ts'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '\\.(svg|png|jpe?g|gif|webp)$': '<rootDir>/src/__mocks__/file-mock.ts',
    // UI-кит публикует только ESM-экспорт "import", указываем файл напрямую
    '^@krgaa/react-developer-burger-ui-components$':
      '<rootDir>/node_modules/@krgaa/react-developer-burger-ui-components/dist/react-ts-lib.es.js',
    '^@api$': '<rootDir>/src/utils/burger-api',
    '^@api/(.*)$': '<rootDir>/src/utils/burger-api/$1',
    '^@slices$': '<rootDir>/src/services/slices',
    '^@slices/(.*)$': '<rootDir>/src/services/slices/$1',
    '^@selectors$': '<rootDir>/src/services/selectors',
    '^@selectors/(.*)$': '<rootDir>/src/services/selectors/$1',
    '^@utils-types$': '<rootDir>/src/utils/types',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components$': '<rootDir>/src/components',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@contexts$': '<rootDir>/src/contexts',
    '^@contexts/(.*)$': '<rootDir>/src/contexts/$1',
    '^@hocs$': '<rootDir>/src/hocs',
    '^@hocs/(.*)$': '<rootDir>/src/hocs/$1',
    '^@hooks$': '<rootDir>/src/hooks',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@pages$': '<rootDir>/src/pages',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@services$': '<rootDir>/src/services',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@utils$': '<rootDir>/src/utils',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@ui$': '<rootDir>/src/components/ui',
    '^@ui/(.*)$': '<rootDir>/src/components/ui/$1',
    '^@ui-pages$': '<rootDir>/src/components/ui/pages',
    '^@ui-pages/(.*)$': '<rootDir>/src/components/ui/pages/$1',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@krgaa/react-developer-burger-ui-components/)',
  ],
  transform: {
    '^.+\\.[jt]sx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
        diagnostics: false,
      },
    ],
  },
};

export default config;
