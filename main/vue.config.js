const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 8080
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          // treat any tag that starts with ion- as custom elements
          isCustomElement: tag => tag.startsWith('micro-app')
        }
      }))

    config.plugin('define').tap((defs) => {
      Object.assign(defs[0], {
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
      })
      return defs
    })
  }
})
