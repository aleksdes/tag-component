const path = require('path')
const t = new Date().getTime()/1000|0
const { defineConfig } = require('@vue/cli-service')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = defineConfig({
    publicPath: process.env.PUBLIC_URL || '/',
    lintOnSave: process.env.NODE_ENV !== 'production',
    transpileDependencies: ['vuetify'],

    configureWebpack: {
        plugins: [
            new StyleLintPlugin({
                files: [path.resolve(__dirname, 'src/**/*.{vue,scss}')],
            }),
        ],
        output: {
            filename: `[name].${t}.[contenthash].bundle.js`,
            chunkFilename: `js/${t}_[name].js`,
        },
        experiments: {
            topLevelAwait: true,
        }
    },

    chainWebpack: (config) => {
      config.resolve.alias.set('~', path.join(__dirname, 'src'))
      config.resolve.alias.set('@', path.join(__dirname, 'src'))
    },

    css: {
        sourceMap: process.env.NODE_ENV !== 'production',
        loaderOptions: {
            scss: {
                additionalData: [
                    `@import "vuetify/src/styles/settings/_variables";`,
                    `@import "@/assets/styles/variables/index";`,
                ].join('\n')
            },
        },
    }
})
