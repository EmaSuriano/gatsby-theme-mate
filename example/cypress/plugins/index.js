const percyHealthCheck = require('@percy/cypress/task');

module.exports = (on, config) => {
  config.env.PERCY_TOKEN = process.env.PERCY_TOKEN;
  on('task', percyHealthCheck);
  return config;
};
