const sharedRules = {
  'import/order': [
    'error',
    { groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'] },
  ],
  'import/extensions': 'off',
  'import/prefer-default-export': 'off',
  'import/no-default-export': 'error',
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: true,
      optionalDependencies: true,
      peerDependencies: true,
    },
  ],
  'comma-dangle': 'off',
  'func-names': 'off',
  'no-use-before-define': 'off',
  'no-plusplus': 'off',
  'no-new': 'off',
  'no-unused-vars': 'off',
  'implicit-arrow-linebreak': 'off',
  'function-paren-newline': 'off',
  'no-console': 'off',
  'newline-after-var': 'error',
  'capitalized-comments': 'error',
  'operator-linebreak': 'off',
  'object-curly-newline': 'off',
  'no-underscore-dangle': 'off',
};

module.exports = {
  extends: 'airbnb-base',
  env: { browser: true, es6: true, node: true },
  ignorePatterns: ['public', 'node_modules/'],
  rules: {
    ...sharedRules,
    'import/no-unresolved': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts'],
      env: { browser: true, es6: true, node: true },
      extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        ...sharedRules,
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
      },
    },
  ],
};
