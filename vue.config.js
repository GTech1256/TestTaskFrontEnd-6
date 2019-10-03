const path = require('path');

module.exports = {
  outputDir: 'dist/front',
  chainWebpack: (config) => {
    config
      .entry('app')
      .clear()
      .add('./src/front/main.ts')
      .end();
    config.resolve.alias
      .set('@', path.join(__dirname, './src/front'));
  },
};
