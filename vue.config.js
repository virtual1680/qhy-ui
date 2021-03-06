/**
 *
 *mac
 *2021/5/18
 *495301515@qq.com
 */
const path = require('path');

const config = {
  // 公共路径(必须有的)
  publicPath: "./",
  // 输出文件目录
  outputDir: "dist",
  // 静态资源存放的文件夹(相对于ouputDir)
  assetsDir: "static",
  // eslint-loader 是否在保存的时候检查(果断不用，这玩意儿我都没装)
  lintOnSave:false,
  // 我用的only，打包后小些
  runtimeCompiler: false,
  productionSourceMap: true, // 不需要生产环境的设置false可以减小dist文件大小，加速构建
  css: { extract: false },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }

};
module.exports = config;
