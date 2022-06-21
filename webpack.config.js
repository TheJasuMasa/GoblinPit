module.exports = {
  mode: "development",
  module: {
    rules: [{ test: /\.json$/, loader: "json" }],
  },
};
