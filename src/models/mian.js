import request from '@/utils/request';
import url from '@/utils/url';
const GlobalModel = {
  namespace: 'main',
  state: {},
  effects: {
    // 测试
    *test({ payload }, { call, put }) {
      const res = yield call(request, url.bannerList, {
        requestMethod: 'POST',
      });
      return res;
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
export default GlobalModel;
