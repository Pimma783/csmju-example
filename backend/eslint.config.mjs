import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist/**', '.openapi-build/**', 'node_modules/**'] },
  ...tseslint.configs.recommended,
);
