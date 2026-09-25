import react from '@vitejs/plugin-react';
import { checker } from 'vite-plugin-checker';
import readableClassnames from 'vite-plugin-readable-classnames';
import sassDts from 'vite-plugin-sass-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [checker({
      typescript: { tsconfigPath: 'tsconfig.app.json' }
    }), react(), readableClassnames(), sassDts({
      enabledMode: ['development'],
      esmExport: true
    }), tsconfigPaths()],
    base: '',
    define: {
      'process.env.BURGER_API_URL': JSON.stringify(env.BURGER_API_URL ?? '')
    },
    server: {
      open: true
    },
  };
});
