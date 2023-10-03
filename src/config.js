const dev = {
  apiUrl: process.env.DEV_APIURL,
};

const prod = {
  apiUrl: process.env.PROD_APIURL,
};

let config;
if (process.env.NODE_ENV === 'devlopment') {
  config = dev;
} else {
  config = prod;
}

export default config;
