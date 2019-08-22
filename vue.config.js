// vue.config.js
module.exports = {
  devServer: {
    proxy: 'https://api.datacite.org/',
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    // svgRule
    //   .use('vue-svg-loader')
    //   .loader('vue-svg-loader');
    // Edge compatibility
    // https://github.com/visualfanatic/vue-svg-loader/issues/63#issuecomment-463114598
    svgRule
    .use('babel-loader')
    .loader('babel-loader')
    .end()
    .use('vue-svg-loader')
    .loader('vue-svg-loader')
  },
}