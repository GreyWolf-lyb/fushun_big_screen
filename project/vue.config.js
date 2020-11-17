// 引入等比适配插件
const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
    // 基准大小 baseSize，需要和rem.js中相同
    remUnit: 16
})

module.exports = {
    //配置css loader
    css: {
        loaderOptions: {
            sass: {
                // sass 版本 9 中使用 additionalData 版本 8 中使用 prependData 旧版本中使用 data
                additionalData: `@import "@/assets/style/main.scss";
                @import "@/assets/style/minxin.scss";`
            },
            postcss: {
                plugins: [
                    postcss
                ]
            }
        }
    },
    // 配置别名
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'com': '@/components'
            }
        }
    },
    // 跨域代理
    // devServer: {
    //     host: '0.0.0.0',
    //     port: 8080,
    //     proxy: {
    //         '/api': {
    //             target: 'http://47.104.218.120/',
    //             changeOrigin: true
    //         }
    //     }
    // },
    publicPath: './', // 编译后的地址，可以根据环境进行设置
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: true, // 是否开启编译时是否不符合eslint提示
}