const dashboardModel = require('../models/dashboard');

const findUserByPage = async (ctx, next) => {
  let { page, size } = ctx.request.body;
  let data = await dashboardModel.findUserByPage({page, size});
  ctx.body = {
    data,
    result_message: '查询成功！',
    result: true
  };
};

module.exports = {
  findUserByPage
};