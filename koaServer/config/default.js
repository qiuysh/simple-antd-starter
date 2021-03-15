const Sequelize = require('sequelize');

/**
 * 数据库配置信息
 */
const config = {
  database: 'test', // 数据库
  user: 'root', // 用户名
  password: '123456', // 密码
  host: 'localhost', // 主机名
};

/**
 * 数据库连接信息
 */
const sequelize = new Sequelize(
  config.database, 
  config.user, 
  config.password, 
  {
    host: config.host,
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    }
  }
);


module.exports = {
  config,
  sequelize,
};