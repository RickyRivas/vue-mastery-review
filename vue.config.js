
// vue.config.js
module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/scss/global.scss";`
      },

    }
  }
}