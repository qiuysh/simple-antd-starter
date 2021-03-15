const crypto = require('crypto');
const tokenUtils = require('../utils/token');
const userModel = require('../models/user');

/**
 * 登录
 * @param {*} ctx 
 * @param {*} next 
 */
const login = async (ctx, next) => {
  const { username, password } = ctx.request.body;
  const user = await userModel.findByUser(username);
  if (user && username === user.name && password === user.password) {
    const token = tokenUtils.generateToken({uid: user.id, username });
    ctx.body = {
      data: {
        token
      },
      result_message: '登录成功！',
      result: true
    };
  } else {
    ctx.body = {
      result_message: '账号或者密码不正确！',
      result: false
    };
  }
};

/**
 * 登出
 * @param {*} ctx 
 * @param {*} next 
 */
const logout = async (ctx, next) => {
  ctx.header['authorization'] = null;
  ctx.body = {
    result_message: '已退出当前用户！',
    result: true
  };
};


module.exports = {
  login,
  logout
};