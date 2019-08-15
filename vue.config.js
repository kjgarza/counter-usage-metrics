// vue.config.js
module.exports = {
  devServer: {
    proxy: 'https://api.datacite.org/',
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
}