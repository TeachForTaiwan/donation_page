module.exports = {
  root: true,
  extends: "airbnb-base",
  // require html plugin to lint .vue file
  plugins: [
    'import',
    'html'
  ],
  env: {
    "browser": true,
    "es6": true,
  },
  rules: {
    "no-console": 0,
    "no-plusplus": 0,
    "import/extensions": ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }]
  }
};
