// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/styles/main.scss";`
            }
        }
    },
    devServer: {
        proxy: {
            // proxy all requests starting with /api to jsonplaceholder
            // 自訂 local 端的位置
            '/api': {
                target: 'https://jsonplaceholder.typicode.com', // 遠端 URL Domain
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        overlay: {
            // 針對eslint設定
            warnings: false,
            errors: true
        }
    }
}
