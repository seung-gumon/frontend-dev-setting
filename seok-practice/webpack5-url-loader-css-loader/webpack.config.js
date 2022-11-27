const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/app.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./dist'),
    },

    /** Webpack5 버전에서는 file-loader , url-loader , raw-loader 가 webpack의 기본 모듈로 채택되어 더이상 설치를 안해두 된다.
     *
     * **/
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            { //url-loader 사용시
                test: /\.(jpe?g|gif|png)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024 // 8kb
                    }
                },
            },

            /**
            // { //file-loader 만 사용시
            //   test: /\.(jpe?g|gif|png)$/i,
            //   type: 'asset/resource',
            // }
            **/

            /**
             * // {
             *             //     test: /\.(jpg|png)$/,
             *             //     loader: 'url-loader',
             *             //     options: {
             *             //         name: '[name].[ext]?[hash]',
             *             //         publicPath : './dist',
             *             //         limit : 10000,
             *             //     }
             *             //
             *  }
             *  해당 코드는 Webpack4버전에 해당하는 Url-loader 사용법이며 , url-loader 를 따로 설치해줘야한다.
             *
             * **/

        ]
    }
}
