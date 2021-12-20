module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: false,
  clearMocks: true,
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',

  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
