export default {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  clearMocks: true,
  testMatch: ["**/__tests__/**/*.(spec|test).[jt]s?(x)"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["html", "text"],
};
