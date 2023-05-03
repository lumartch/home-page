const CopyPlugin = require("copy-webpack-plugin");

const prod = {
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: "public/lumartch-dev.JPG", to: "." }],
        }),
    ],
};

module.exports = { prod };
