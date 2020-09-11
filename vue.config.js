/*
 * @Author:
 * @Date: 2020-09-02 19:32:22
 * @LastEditTime: 2020-09-02 19:39:17
 * @LastEditors: Please set LastEditors
 * @Description:
 * @傻瓜都能写出计算机能理解的程序。优秀的程序员写出的是人类能读懂的代码。
 */
module.exports = {
  // 资源基本路径
  publicPath: "./",
  // 配置 webpack-dev-server 行为。
  devServer: {
    open: true,
    port: 8080,
    hotOnly: true,
    proxy: {
      // 代理/api_proxy路径的请求
      "/api_proxy": {
        // API服务器的地址
        target: "http://www.baidu.com",
        //代理websockets
        ws: true,
        // 虚拟的站点需要更管origin
        changeOrigin: true,
        // 重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
        pathRewrite: { "^/api_proxy": "" }
      }
    }
  },
  // 为预处理器的 loader 传递自定义选项。比如传递给
  // sass-loader 时，使用 `{ sass: { ... } }`。
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/style/index.scss";`
      }
    }
  }
};
