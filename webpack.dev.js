const path = require('path');

const dev = {
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        historyApiFallback: true,
        compress: true,
        port: 3000,
        client: {
            webSocketURL: {
                hostname: '0.0.0.0',
                pathname: '/ws',
                port: 4280,
                protocol: 'ws',
            },
        },
    },
};

module.exports = { dev }