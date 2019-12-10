/**
 * switch config
 */
// 生产环境判断
const productionFlag = process.env.NODE_ENV === 'production'
// 生产环境 js sourcemap
const productionSourceMap = !productionFlag
// 生产环境 css sourcemap
const cssSourceMap = !productionFlag

// build 打包生产代码，同时生产 zip 文件
const zipPackage = true

// config export
module.exports = {
  publicPath: productionFlag ? './' : '/',
  assetsDir: './',
  filenameHashing: false,
  productionSourceMap,

  css: {
    sourceMap: cssSourceMap
  },

  configureWebpack: config => {
    // 添加打压缩包插件
    if (productionFlag && zipPackage) {
      const ZipPlugin = require('zip-webpack-plugin')
      config.plugins.push(
        new ZipPlugin({
          path: config.output.path,
          outPath: config.output.path,
          filename: 'archive.zip'
        })
      )
    }
  },

  chainWebpack: config => {
    // 为 svg 添加新 loader，以便封装 svg 图标
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .tap(options => {
        return { symbolId: 'icon-[name]' }
      })
      .end()
  },

  pluginOptions: {
    /*
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/', '/about'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
    */
  }
}
