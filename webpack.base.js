module.exports = {
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['@babel/preset-react', ['@babel/preset-env', {
                    targets: {
                        browsers: ['last 2 versions']   // 兼容当前主流浏览器的最后2个版本
                    }
                }]]
            }
        }]
    }
}