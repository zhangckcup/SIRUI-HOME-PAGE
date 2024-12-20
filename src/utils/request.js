import { extend } from 'umi-request';
import errorMessage from './errorMessage';

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  // errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
});

/**
 * @description: 二次封装
 * @param {url} 接口请求地址
 * @param {options.requestType} 接口请求格式 form || json ,默认 form
 * @param {options.requestMethod} 接口请求方式 POST || GET,默认 POST
 * @param {options.body} 接口传参
 * @return {fn}
 */
request.interceptors.request.use(async (url, options) => {
  const token = localStorage.getItem('__loginState__');

  const headers = {
    'Content-Type': `application/${
      options.requestType ? options.requestType : 'x-www-form-urlencoded'
    }`,
    Accept: 'application/json',
  };
  if (token) {
    headers.token = token;
  }

  return {
    url,
    options: {
      method: options.requestMethod ? options.requestMethod : 'POST',
      requestType: options.requestType ? options.requestType : 'form',
      data: options.body,
      headers,
      customError: options.customError || false,
    },
  };
});

request.interceptors.response.use(async (response, options) => {
  const res = await response.clone().json();
  if (!res.success && !options.customError) {
    errorMessage(res);
  }
  return response;
});

export default request;
