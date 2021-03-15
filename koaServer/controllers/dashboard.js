const dashboardModel = require('../models/dashboard');

const findUserByPage = async (ctx, next) => {
  const { page, size } = ctx.request.body;
  const data = await dashboardModel.findUserByPage({page, size});
  ctx.body = {
    data,
    result_message: '查询成功！',
    result: true
  };
};

module.exports = {
  findUserByPage
};