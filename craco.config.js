const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@contexts": path.resolve(__dirname, "src/contexts/"),
      "@features": path.resolve(__dirname, "src/features/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@layouts": path.resolve(__dirname, "src/layouts/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
    },
  },
};
