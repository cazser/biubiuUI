const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [new VueLoaderPlugin()],
    module: {
        rules: [

            {

                test: /\.vue$/,

                use: {

                    loader: 'vue-loader'

                }
            },
            {
                test: /\.css$/, // 正则表达式，表示.css后缀的文件
                use: ['style-loader', 'css-loader'] // 针对css文件使用的loader，注意有先后顺序，数组项越靠后越先执行
            },
            {
                test: /\.scss$/, // 正则表达式，表示.scss后缀的文件
                use: ['style-loader', 'css-loader', 'sass-loader'] // 针对scss文件使用的loader，注意有先后顺序，数组项越靠后越先执行
            }
        ]
    }
};