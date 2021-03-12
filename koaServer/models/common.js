const { sequelize } = require('../config/default');
const Sequelize = require('sequelize');

const Permissions = sequelize.define('permissions', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  pid: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  name: Sequelize.STRING(50),
  type: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  icon: {
    type: Sequelize.STRING(18),
    defaultValue: null,
    allowNull: true
  },
  url: {
    type: Sequelize.STRING(50),
    allowNull: false,
    defaultValue: null,
    unique: true,
  },
  code: Sequelize.STRING(50),
  desc: Sequelize.STRING(250)
}, {
  tableName: 'permissions',
  createdAt: 'create_time',
  updatedAt: 'modified_time'
});

/**
 * 分页获取用户列表
 * @param {*} param0 
 */
async function findMenus() {
  const result = await Permissions.findAll({
    where: {},
  });
  return result;
}

module.exports = {
  findMenus: findMenus,
};