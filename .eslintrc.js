module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "jest/globals": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:jest/recommended",
    // "plugin:jest/style",
    "prettier",
  ],
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "vue",
    "jest",
  ],
  "rules": {
  }
};
