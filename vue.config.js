const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports={
   lintOnSave:false,//暂时关闭代码格式检测

   devServer:{
    proxy:{
      //    '/ajax': {
      //   target: 'https://m.maoyan.com',反向代理，解决跨域,需要重启服务器
      //   changeOrigin: true
      //  }

      '/wang':{
        target: 'https://m.maoyan.com',
        changeOrigin: true,
        pathRewrite:{
          ['^/wang']:''//把wang换成空字符串
        }
      }
    },
    host:'0.0.0.0',
    port:3000,
    client:{
      webSocketURL:'ws://0.0.0.0:3000/ws',
    },
    headers:{
      'Access-Control-Allow-Origin':'*',
    }
   },
}
