import { defineConfig } from 'umi';
import path from 'path';
import routes from './config/routes';
import px2viewport from 'postcss-px-to-viewport';

export default defineConfig({
  base: '/',
  publicPath: '/',
  alias: {
    '@': path.resolve(__dirname, 'src'),
    $public: path.resolve(__dirname, 'public'),
  },
  proxy: {
    '/api': {
      enable: true,
      target: 'https://api.sandwichlab.ai',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
      secure: false,
    },
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  define: {
    local: 'http://192.168.26.128:8080', // 对接接口需要配置的端口
  },
  title: 'SandwichLab',
  hash: true,
  history: { type: 'browser' },
  fastRefresh: {},
  extraPostCSSPlugins: [
    px2viewport({
      viewportWidth: 1920,
      viewportHeight: 1080,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: ['mobile'],
      minPixelValue: 1,
      mediaQuery: false,
    }),
    px2viewport({
      viewportWidth: 393,
      viewportHeight: 1080,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: ['pc', 'ant'],
      minPixelValue: 1,
      mediaQuery: true,
    }),
  ],
});
