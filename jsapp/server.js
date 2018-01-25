const express = require('express');
const compression = require('compression');
const colors = require('colors');

const port = 3003;

(async function () {
    const app = new (require('express'))();
    app.use(compression());

    const developerEnv = app.get('env') === 'development';
    const productionEnv = app.get('env') === 'production';


    if (developerEnv) {
        const webpack = require('webpack');
        const webpackDevMiddleware = require('webpack-dev-middleware');
        const config = require('./webpack.config');

        const compiler = webpack(config);

        console.log('Server Running in Developer Environment'.green.bold);

        app.use(webpackDevMiddleware(compiler, {
            stats: { colors: true, progress: true },
            publicPath: config.output.publicPath
        }));
    }

    if (productionEnv) {
        console.log('Server Running in Production Environment'.red.bold);
    }

    app.use('/dist', express.static('dist'));

    app.get('/*', (req, res) => {
        res.sendFile(`${__dirname}/index.html`);
    });

    app.listen(port, (error) => {
        if (error) {
            console.error(error);
        } else {
            console.info('Running on port %s.', port);
        }
    });
}());
