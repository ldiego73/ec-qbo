module.exports = {
  moduleNameMapper: {
    ".+\\.(css|sass|scss)$": "indetity-obj-proxy",
    "^@src(.*)$": "<rootDir>/src$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@contexts(.*)$": "<rootDir>/src/contexts$1",
    "^@features(.*)$": "<rootDir>/src/features$1",
    "^@hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@layouts(.*)$": "<rootDir>/src/layouts$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",
  },
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "reports/test",
        filename: "result.html",
        pageTitle: "EC QBO - Unit Test",
      },
    ],
  ],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js", "src/**/*.jsx", "!**/node_modules/**"],
  coverageReporters: ["json", "text", "lcov", "html"],
  coverageDirectory: "reports/coverage",
  testURL: "http://localhost",
  testResultsProcessor: "jest-sonar-reporter",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
