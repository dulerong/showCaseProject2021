module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
  testMatch: [ // specify folder which jest test files will be stored
    '**/tests/VueJest/**/*.spec.[jt]s?(x)',
  ],
  moduleNameMapper: {
    "^~/(.+)$": "<rootDir>/resources/$1",
    "^~pages/(.+)$": "<rootDir>/resources/js/vue/pages/$1",
    "^~layouts/(.+)$": "<rootDir>/resources/js/vue/layouts/$1",
    "^~components/(.+)$": "<rootDir>/resources/js/vue/components/$1",
  },
  setupFiles: ['./tests/setup.js']
}
