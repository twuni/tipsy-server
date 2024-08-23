import eslint from '@eslint/js';

export default Object.freeze([
  eslint.configs.all,
  {
    rules: {
      'no-shadow': 'off',
      'no-ternary': 'off',
      'one-var': 'off'
    }
  }
]);
