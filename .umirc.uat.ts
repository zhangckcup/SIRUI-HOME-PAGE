import { defineConfig } from 'umi';
import path from 'path';

export default defineConfig({
  base: '/',
  publicPath: '/',
  alias: {
    '@': path.resolve(__dirname, 'src'),
    $public: path.resolve(__dirname, 'public'),
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  define: {
    local: 'http://192.168.26.128:8080', // 对接接口需要配置的端口
  },
  hash: true,
  history: { type: 'browser' },
  fastRefresh: {},
});
