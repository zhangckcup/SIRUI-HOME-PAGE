module.exports = {
  /**
   * todo 存储用户信息
   */
  userInfo: {},

  /**
   * todo 获取页面cookie
   * @param {*} name
   */
  getCookie(name) {
    const strCookie = document.cookie;
    const arrCookie = strCookie.split('; ');
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < arrCookie.length; i++) {
      const arr = arrCookie[i].split(name + '=');
      if (arr[1]) {
        return arr[1];
      }
    }
    return '';
  },
  /**
   * 删除cookie
   * @param name cookie的名称
   */
  delCookie(name) {
    const exp = new Date();
    exp.setDate(exp.getDate() - 1);
    document.cookie = name + "='';expires=" + exp;
  },
  /**
   * 获取路由上的参数
   */
  // getPageQuery (){
  //   parse(window.location.href.split('?')[1])
  // },
  /**
   * todo 设置页面cookie
   * @param {*} name
   * @param {*} value
   */
  setCookie(name, value) {
    const exp = new Date();
    // 因需手机号验证码登录较为麻烦，将本地缓存时间临时修改为原来的十倍
    exp.setTime(exp.getTime() + 24 * 60 * 60 * 1000);
    // eslint-disable-next-line prefer-template
    document.cookie = name + '=' + value + ';expires=' + exp.toGMTString();
  },
};
