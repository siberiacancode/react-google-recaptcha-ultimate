/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  rootDir: './',
  clearMocks: true,
  collectCoverage: true,
  testEnvironment: 'jsdom',
  coverageDirectory: 'coverage',
  testMatch: ['**/?(*.)test.ts?(x)'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js']
};
