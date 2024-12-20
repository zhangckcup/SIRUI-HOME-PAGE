import { history } from 'umi';
import { message } from 'antd';

let codeArr = [];

function errorMessage(res) {
  if (!codeArr.includes(res.code)) {
    codeArr.push(res.code);
    message.error(res.message);
    setTimeout(() => {
      codeArr = codeArr.filter((n) => n !== res.code);
    }, 500);
    if (res.code === '504' && res.message === '登录失效，请重新登录!') {
      // message.info('登录失效，请重新登录!');
      localStorage.removeItem('__loginState__');
      history.replace('/user/login');
    }
  }
}

export default errorMessage;
