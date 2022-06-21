// loaders: [
//   { test: /\.json$/, loader: "json" },
//   // other loaders
// ];

module.exports = {
  mode: "development",
  module: {
    rules: [{ test: /\.json$/, loader: "json" }],
  },
};
