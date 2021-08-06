module.exports = (on, config) => {
  config.env.PERCY_TOKEN = process.env.PERCY_TOKEN;

  on('task', {
    log(message) {
      console.log(message);

      return null;
    },
    table(message) {
      console.table(message);

      return null;
    },
  });

  return config;
};
