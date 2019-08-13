"use strict";
const path = require("path");
module.exports = {
  chainWebpack: config => {
    config.plugins.delete("named-chunks");
    config.resolve.alias.set("@assets", path.resolve(__dirname, "src/assets"));
  },
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",

  // 输出目录
  assetsDir: "static",
  outputDir: process.env.outputDir,

  // eslint-loader 是否在保存的时候检查 安装@vue/cli-plugin-eslint有效
  lintOnSave: true,

  indexPath: "index.html",

  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },

  // 构建时开启多进程处理babel编译
  parallel: require("os").cpus().length > 1,

  //是否使用包含运行时编译器的 Vue 构建版本。设置true后你就可以在使用template
  runtimeCompiler: true,

  // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  productionSourceMap: false,

  devServer: {
    // overlay: {
    //   warnings: true,
    //   errors: true
    // },
    open: true,

    overlay: {
      warnings: false,
      errors: false
    },

    host: "0.0.0.0", // can be overwritten by process.env.HOST
    port: 8080,
    https: false,
    hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
    proxy: {
      "/api/": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true, //是否跨域
        pathRewrite: {
          "^/api/": "/api/" //地址重写，将 /ajax替换成  ''
        }
      }
    }
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/assets/css/global.less")]
    }
  }
};
