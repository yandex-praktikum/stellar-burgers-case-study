/**
 * eslint-plugin-css-modules ships as plain JavaScript without type declarations
 * and has no @types package on npm. Declared here as an ESLint plugin so
 * eslint.config.ts type-checks without falling back to `any`.
 */
declare module 'eslint-plugin-css-modules' {
  import type { ESLint } from 'eslint';

  const plugin: ESLint.Plugin;
  export default plugin;
}
