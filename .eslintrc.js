module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.js', 'babel.config.js', 'metro.config.js'],
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: false },
    ],
    'react/require-default-props': 'off',
    'react/jsx-curly-brace-presence': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/order': [
      'error',
      {
        pathGroups: [
          { pattern: 'react*', group: 'builtin', position: 'before' },
          { pattern: '@src/**', group: 'external', position: 'after' },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc' },
      },
    ],
    // off
    '@typescript-eslint/ban-ts-comment': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'no-nested-ternary': 'off',
    'consistent-return': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/no-unstable-nested-components': 'off',
    'no-inner-declarations': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'import/extensions': 'off',
    'no-plusplus': 'off',
    // 여기서 부터 오프 나중에 풀기
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    'func-names': 'off',
    'import/no-unresolved': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-array-index-key': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    'array-callback-return': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    'no-case-declarations': 'off',
    'no-param-reassign': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-empty': 'off',
    'no-empty-pattern': 'off',
    'default-case': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/parser': 'off',
    'import/no-cycle': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
  overrides: [
    {
      files: ['src/network/axiosUtils.ts'],
      rules: {
        'no-param-reassign': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['src/services/**/*.ts'],
      rules: {
        'no-useless-catch': 'off',
      },
    },
    {
      files: ['src/redux/**/*.ts'],
      rules: {
        'no-param-reassign': 'off',
      },
    },
    {
      files: ['src/utils/validateUtils.tsx'],
      rules: {
        'no-useless-escape': 'off',
      },
    },
    {
      files: ['src/utils/utils.ts'],
      rules: {
        'no-promise-executor-return': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        'array-callback-return': 'off',
        'no-console': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
