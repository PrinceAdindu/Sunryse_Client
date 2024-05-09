import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    build: {
      sourcemap: true,
    },
    // prod port
    preview: {
      port: process.env.VITE_DEV_PORT,
    },
    // dev port
    server: {
      port: process.env.VITE_DEV_PORT,
    },
  });
};
