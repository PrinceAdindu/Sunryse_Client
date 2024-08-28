import {defineConfig, loadEnv} from "vite";
import react from "@vitejs/plugin-react";

export default ({mode}) => {
  // Load app-level env vars to node-level env vars.
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    plugins: [react()],
    build: {
      sourcemap: true,
    },
    // prod port
    preview: {
      port: parseInt(process.env.VITE_DEV_PORT || "3000"),
    },
    // dev port
    server: {
      port: parseInt(process.env.VITE_DEV_PORT || "3000"),
    },
  });
};
