module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  rules: {
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "react/no-string-refs": [0],
    "react/prop-types": [0]
  }
};
