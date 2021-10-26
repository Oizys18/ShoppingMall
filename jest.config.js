// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = async () => {
  return {
    verbose: true,
    testEnvironment:'jsdom',
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
  };
};