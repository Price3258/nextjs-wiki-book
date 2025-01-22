module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    // ESLint 규칙
    'prettier/prettier': 'error', // Prettier 규칙 적용
    'react/react-in-jsx-scope': 'off', // React 17 이상에서는 불필요
    'react/prop-types': 'off', // TypeScript 사용 시 PropTypes는 불필요
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_' }, // 사용하지 않는 변수 경고, _로 시작하는 변수는 무시
    ],
    '@typescript-eslint/no-explicit-any': 'warn', // any 사용을 경고
    'no-console': 'warn', // console.log 사용을 경고
    'no-unused-vars': 'off', // TypeScript 규칙으로 대체
    'react/display-name': 'off', // 익명 함수의 displayName 경고 끔
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
