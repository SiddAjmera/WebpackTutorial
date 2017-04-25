const path = require('path');

module.exports = {
    entry: './src/main.coffee',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.coffee$/,
                exclude: /(node_modules)/,
                loader: 'coffee-loader'
            }
        ]
    }
}