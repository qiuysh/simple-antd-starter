import reqwest from 'reqwest';
import { browserHistory } from 'react-router';
import { Message, Modal } from 'antd';
const confirm = Modal.confirm;

// 线上环境数据接口api
const PRO_API = 'http://localhost';

const isProduction = process.env.NODE_ENV === 'production';

const SERVER_URL = isProduction ? PRO_API : '';


const TOOLS = {

  api: SERVER_URL, // 生产环境api地址

  imgApi: IMG_URL, // 图片地址

  fetchData: function (req) {

    let self = this;

    reqwest({
      url: this.api + req.url,
      contentType: req.contentType || 'application/json;charset=UTF-8',
      method: req.method || 'post',
      data: req.data,
      headers: {
        Token: localStorage.token || null
      },
      type: 'json',
      success: function (result) {
        if (result.code === '401') {
          confirm({
            title: result.message,
            content: '是否返回登录页？',
            onOk () {
              self.logout();
            },
            onCancel () {}
          });
        } else {
          req.callback(result);
        }
      },
      error: function (err) {
        if (err.status === 500) {
          Message.error('请求服务器失败...o(╯□╰)o');
        } else {
          Message.error('服务器响应超时，请重新请求...o(╯□╰)o');
        }
      },
    });
  },

  // 拦截跳转
  redirectToLogin: function () {
    if (!this.loggedIn()) {
      browserHistory.push('/login.html');
    }
  },

  // 退出
  logout: function (cb) {
    localStorage.clear();
    if (cb) { cb(); }
    this.redirectToLogin();
  },

  // 登录验证
  loggedIn: function () {
    return !!localStorage.token;
  },

  // 时间戳
  timeStamp: function () {
    let date = Date.now();
    return date;
  },

  // 格式化日期
  formatDate: function (value) {
    if (!value) { return ''; }
    let date = new Date(value);
    let year = date.getFullYear();
    let month = (date.getMonth() + 1 > 9) ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1);
    let day = (date.getDate() > 9) ? (date.getDate()) : '0' + (date.getDate());
    return year + '-' + month + '-' + day;
  },

  // 数组去重
  unique: function (arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
      if (!hash[elem]) {
        result.push(elem);
        hash[elem] = true;
      }
    }
    return result;
  },

  // 验证中文
  isChinese: function (rule, value, callback) {
    if (!value) {
      value = '';
    }
    if (value.match(/[^\u4e00-\u9fa5]/g)) {
      callback('请输入中文名称');
    } else {
      callback();
    }
  },

  // 验证正整数
  isNumber: function (rule, value, callback) {
    if (!value) {
      value = '';
    }
    if (!!value && value.match(/^\+?[1-9][0-9]*$/g) || value === 0) {
      callback();
    } else {
      callback('请输入大于等于0的整数');
    }
  },

  // 验证正浮点数
  isFloat: function (rule, value, callback) {

    if (!value) {
      value = '';
    }
    if (!!value && value.match(/^([1-9]\d*|0)(\.\d{1,2})?$/g) || value === 0) {
      callback();
    } else {
      callback('请输入数字，有且仅有两位小数');
    }
  },

  // 验证浮点数及整数
  isAllFloat: function (rule, value, callback) {

    if (!value) {
      value = '';
    }
    if (!!value && value.match(/^-?([1-9]\d*|0)(\.\d{1,2})?$/g) || value === 0) {
      callback();
    } else {
      callback('请输入数字，有且仅有两位小数');
    }
  },

  // 验证手机号
  isPhone: function (rule, value, callback) {
    if (!value) {
      value = '';
    }
    if (!!value && value.match(/^(0|86|17951)?(13[0-9]|147|15[012356789]|17[678]|18[0-9])[0-9]{8}$/g) || value === 0) {
      callback();
    } else {
      callback('请输入正确的手机号码');
    }
  },

  // 验证号码
  isTell: function (rule, value, callback) {

    if (!value) {
      value = '';
    }
    if (!!value && value.match(/^\d{3}-\d{8}|\d{4}-\d{7,8}$/g) || value.match(/^(0|86|17951)?(13[0-9]|147|15[012356789]|17[678]|18[0-9])[0-9]{8}$/g) || value === 0) {
      callback();
    } else {
      callback('请输入正确的电话号码');
    }
  },


  // 验证密码
  isPwd: function (rule, value, callback) {
    if (!value) {
      value = '';
    }
    if (!!value && value.match(/^(?![^a-zA-Z]+$)(?!\D+$).{6,15}$/g) || value === 0) {
      callback();
    } else {
      callback('6-15位字符，且至少包含一个字母和数字');
    }
  },

  // 验证身份证
  isCard: function (rule, value, callback) {
    if (!value) {
      value = '';
    }
    if (!!value && value.match(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/g)) {
      callback();
    } else {
      callback('请输入正确的身份证号');
    }
  }

};

// noinspection JSAnnotator
window.TOOLS = TOOLS;

export default TOOLS;
