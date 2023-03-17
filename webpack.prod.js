const prod = {
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};

module.exports = { prod }