import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = [
  {
    ignores: ['.next/**', 'node_modules/**', 'lbv-pricing-github-ready/**'],
  },
  ...nextVitals,
];

export default eslintConfig;
