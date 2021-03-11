let baseUrl = `$VUE_APP_BASE_URL: "${process.env.VUE_APP_BASE_URL}";`;

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: baseUrl,
      },
    },
  },
};
