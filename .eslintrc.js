module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: 'airbnb-base',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'no-restricted-globals': 'off',
  },
};
