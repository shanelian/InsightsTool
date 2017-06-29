module.exports = {
  'parser': 'babel-eslint',
  'extends': [
    'eslint:recommended',
    'airbnb'
  ],
  'plugins': [
    'import',
    'flowtype',
    'react'
  ],
  'rules': {
    'semi': 0,
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'global-require': 'off'
  }
}