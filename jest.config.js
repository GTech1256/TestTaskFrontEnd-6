module.exports = {
  projects: [
    {
      displayName: 'front',
      testMatch: [
        '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
      ],
      transform: {
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.tsx?$': 'ts-jest',
      },
      snapshotSerializers: [
        'jest-serializer-vue',
      ],
      watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname',
      ],
    },
    {
      displayName: 'server',
      // testMatch: ['src/server/**/*.(js|ts)'],
      transform: {
        '^.+\\.tsx?$': 'ts-jest',
      },
      maxConcurrency: 1,
    },
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
    'ts',
    'tsx',
  ],
  runner: 'jest-runner-eslint',
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  testURL: 'http://localhost/',
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
