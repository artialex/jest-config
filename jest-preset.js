const { resolve } = require('path')

module.exports = {
  verbose: true,

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  moduleNameMapper: {
    // Match path aliases of TS and Webpack
    '^\\@/(.*)$': '<rootDir>/src/modules/$1',
  },
}

/*

verbose: true,
    rootDir: dirs.src(),
    testRegex: '.*\\.test\\.(ts|tsx)$',
    transform: {
  '^.+\\.(ts|tsx)$': 'ts-jest',
},

setupFiles: [dirs.config('jest/setup.ts')],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  collectCoverageFrom: ['**!/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    'components',
    '@types',
    'index.ts',
    '\\.module\\.ts$',
    '\\.provider\\.ts$',
    'main.ts',
    'vars.ts',
    'values.ts',
  ],

moduleNameMapper: {
  '\\.(css|less)$': dirs.config('jest/style.mock.ts'),
  '^\\$/(.*)$': '<rootDir>/modules/$1',
},

*/
