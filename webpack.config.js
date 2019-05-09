var path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'srcjs/colourpicker.js'),
    output: {
        path: path.join(__dirname, 'inst/www/shared/colourpicker/js'),
        filename: 'colourpicker.min.js'
    },
    module: {
        rules: [
            {
                test: [/\.js$/],
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    },
    externals: {
        'react': 'window.React',
        'react-dom': 'window.ReactDOM',
        'reactR': 'window.reactR',
        'jquery': 'window.jQuery'
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
