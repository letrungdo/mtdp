const withLess = require("next-with-less");

module.exports = withLess({
  env: {
    PUBLIC_URL: "",
  },
  lessLoaderOptions: {},
  poweredByHeader: false,
  publicRuntimeConfig: {
    sendGridApiKey: process.env.SENDGRID_API_KEY,
    recaptchaKey: process.env.RECAPTCHA_KEY,
  },
});
