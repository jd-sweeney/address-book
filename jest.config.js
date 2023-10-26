/** @type {import('ts-jest').JestConfigWithTsJest} */

const path = require('path');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: [path.join(__dirname, 'src/**/__tests__/*.test.(t|j)s?(x)')],
  setupFilesAfterEnv: ['<rootDir>/jestGlobals.ts'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
};
