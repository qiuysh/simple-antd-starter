const { sequelize } = require('../config/default');
const Sequelize = require('sequelize');

/**
 * 分页获取用户列表
 * @param {*} param0 
 */
async function findUserByPage({page, size}) {
  return {};
}


module.exports = {
  findUserByPage: findUserByPage
};