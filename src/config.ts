type Config = {
  nodeEnv?: string;
  apiUrl?: string;
};

const dev: Config = {
  nodeEnv: import.meta.env.VITE_DEV_NODE_ENV,
  apiUrl: import.meta.env.VITE_DEV_API_URL,
};

const prod: Config = {
  nodeEnv: import.meta.env.VITE_DEV_NODE_ENV,
  apiUrl: import.meta.env.VITE_DEV_API_URL,
};

let config: Config;
if (import.meta.env.VITE_DEV_NODE_ENV === "dev") {
  config = dev;
} else {
  config = prod;
}

export default config;
