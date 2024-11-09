// Import the plugins
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production", // Set to production for optimized builds

  // Other configurations (entry, output, etc.)

  optimization: {
    minimize: true, // Enable minification
    minimizer: [
      new TerserPlugin({
        // Terser options
        terserOptions: {
          compress: true,
          mangle: true,
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },

  // Any other configurations (module rules, plugins, etc.)
};
