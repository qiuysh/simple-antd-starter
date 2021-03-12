const jwt = require('jsonwebtoken');
const koaJwt = require('koa-jwt');

/**
 * 私钥
 */
const privateKey = "jsonwebtoken";

/**
 * 生成token
 */
const generateToken = (payload) => {
  const token = 'Bearer ' + jwt.sign(payload, privateKey, {
    expiresIn: 60 * 60
  });
  return token;
}

/**
 * 解析token
 */
const parseToken = (token) => {
  try {
    return jwt.verify(token, privateKey)
  }catch {
    return {}
  }
}

/**
 * 判断token是否更新有效期
 */
const getTokenRenewStatus = (token) => {
  //检测当前token是否到达续期时间段
  let obj = parseToken(token);
  if(!obj.uid || !obj.username){
    return false
  }
  //更新时间段在过期前10分钟
  if(obj.exp - new Date().getTime() / 1000 > 10 * 60){
    return false
  }else{
    return true
  }
}


const koaJwtUnless = (param) => {
  return koaJwt({ secret: privateKey },).unless({
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