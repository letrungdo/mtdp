const withLess = require("next-with-less");

module.exports = withLess({
  env: {
    PUBLIC_URL: "",
  },
  lessLoaderOptions: {},
});
