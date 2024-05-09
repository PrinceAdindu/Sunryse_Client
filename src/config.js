const dev = {
  nodeEnv: import.meta.env.VITE_DEV_NODE_ENV,
  apiUrl: import.meta.env.VITE_DEV_API_URL,
  externalRoutes: [
    '/login',
    '/register',
    '/otp',
    '/resetPassword',
    '/resetPassword/email',
  ],
};

const prod = {};

let config;
if (import.meta.env.VITE_DEV_NODE_ENV === 'dev') {
  config = dev;
} else {
  config = prod;
}

export default config;
