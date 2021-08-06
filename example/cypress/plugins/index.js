module.exports = (_, config) => {
  config.env.PERCY_TOKEN = process.env.PERCY_TOKEN;
  return config;
};
