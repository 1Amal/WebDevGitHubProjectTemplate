module.exports = {
    // Other Jest configuration options
    // Following will direct jest to a Mock styleMock.js so Jest doesn't throw an error by parsing CSS files
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': '<rootDir>/src/styleMock.js',
    },
  };