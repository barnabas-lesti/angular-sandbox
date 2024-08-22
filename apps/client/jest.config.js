/**
 * https://jestjs.io/docs/configuration
 * @type {import('jest').Config}
 */
export default {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  coverageProvider: "v8",
  collectCoverageFrom: ["src/**/*.ts", "!**/index.ts", "!**/*.d.ts"],
  coverageThreshold: {
    // global: {
    //   branches: 90,
    //   functions: 90,
    //   lines: 90,
    //   statements: 90,
    // },
  },
};
