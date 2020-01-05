// Find the full example of all available configuration options at
// https://github.com/muenzpraeger/create-lwc-app/blob/master/packages/lwc-services/example/lwc-services.config.js
module.exports = {
    resources: [{ from: 'src/client/resources', to: 'dist/resources' }],
    sourceDir: './src/client',
    moduleDir: './src/client/modules',
    server: {
		port: 5002,
        customConfig: './src/server/server.js',
		proxy: { '/': 'https://localhost:5002' },
    },
    devServer: {
		port: 5001,
        proxy: { '/': 'http://localhost:35001' },
    }
};
