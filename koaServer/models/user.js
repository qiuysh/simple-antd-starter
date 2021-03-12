const { sequelize } = require('../config/default');
const Sequelize = require('sequelize');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING(50),
  level: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING(18),
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(50),
    allowNull: false,
    defaultValue: null,
    unique: true,
    validate: {
        isEmail: true
    }
  },
  nick: {
    type: Sequelize.STRING(150),
    allowNull: true,
    unique: true
  },
  detail_info: Sequelize.STRING(250)
}, {
  tableName: 'user',
  createdAt: 'create_time',
  updatedAt: 'modified_time'
});


/**
 * 根据id获取用户信息
 * @param {*} id 
 */
async function findById(id) {
  const result = await User.findById(id);
  return result;
}

/**
 * 根据用户获取用户信息
 * @param {*} user 
 */
async function findByUser(user) {
  const query = {
    name: user
  };
  const result = await User.findOne({where: query});
  return result;
}

/**
 * 分页获取用户列表
 * @param {*} param0 
 */
async function findUserByPage({page, size}) {
  const result = await User.findAndCountAll({
    where: {},
    limit: size,
    offset: size * (page - 1)
  });
  return result;
}

/**
 * 修改用户信息
 * @param {*} email 
 * @param {*} password 
 * @param {*} callback 
 */
async function createOrUpdate(email, password, callback) {
  
}

module.exports = {
  findById: findById,
  findByUser: findByUser,
  createOrUpdate: createOrUpdate,
  findUserByPage: findUserByPage
};