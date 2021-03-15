const userModel = require('../models/user')

const findUserByPage = async (ctx, next) => {
  const { page, size } = ctx.query;
  const data = await userModel.findUserByPage({page, size});
  ctx.body = {
    data,
    result_message: '查询成功！',
    result: true
  };
};

module.exports = {
  findUserByPage
};