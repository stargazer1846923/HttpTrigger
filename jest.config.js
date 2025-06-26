export default {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  clearMocks: true,
  testMatch: ["**/src/**/__tests__/**/*.(spec|test).[jt]s?(x)"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["html", "text"],
  extensionsToTreatAsEsm: [".ts"],
  testPathIgnorePatterns: ["<rootDir>/dist/"],
};
