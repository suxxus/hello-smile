const path = require('path');

module.exports = {
    module: {
        loaders: [{
                test: /\.css$/,
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
            },

            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },

    postcss: [
        require('autoprefixer-core'),
        require('postcss-color-rebeccapurple')
    ]
}
