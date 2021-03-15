const jwt = require('jsonwebtoken');
const koaJwt = require('koa-jwt');

// 时间跨度
const rangeTime = 60 * 60;

// 私钥
const privateKey = "jsonwebtoken";

/**
 * 生成token
 */
const generateToken = (payload) => {
  const token = 'Bearer ' + jwt.sign({...payload}, privateKey, {
    expiresIn: rangeTime
  });
  return token;
}

/**
 * 解析token
 */
const parseToken = (token) => {
  try {
    return jwt.verify(token, privateKey)
  } catch (error) {
    return {}
  }
}

/**
 * 判断token是否更新有效期
 */
const getTokenRenewStatus = (token) => {
  //检测当前token是否到达续期时间段
  const obj = parseToken(token);
  const nowTime = new Date().getTime() / 1000;
  const range = 10 * 60;
  if(!obj.uid || !obj.username){
    return false;
  }
  //更新时间段在过期前10分钟
  if(obj.exp - nowTime < range){
    console.log(range, '过期时间')
    return false;
  }
  return true;
}

/**
 * 无需验证token接口
 * @param {*} param 
 */
const koaJwtUnless = (param) => {
  return koaJwt({ secret: privateKey }).unless({
    path:[
      ...param
    ]
  })
}

module.exports = {
  generateToken,
  parseToken,
  getTokenRenewStatus,
  privateKey,
  koaJwtUnless
}