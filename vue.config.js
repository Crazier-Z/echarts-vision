const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    host: 'localhost',
    port: 8999, // 端口号的配置
    open: true // 自动打开浏览器
  },
  transpileDependencies: true
})
