const withLess = require("next-with-less");
const isProd = process.env.NODE_ENV === "production";

module.exports = withLess({
  env: {
    PUBLIC_URL: isProd ? "https://xaydungmaithach.com" : "",
  },
  lessLoaderOptions: {},
  poweredByHeader: false,
  publicRuntimeConfig: {
    sendGridApiKey: process.env.SENDGRID_API_KEY,
    recaptchaKey: process.env.RECAPTCHA_KEY,
  },
});
