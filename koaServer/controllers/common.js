const commonModel = require('../models/common')

const getMenus = async (ctx, next) => {
  let data = await commonModel.findMenus();
  ctx.body = {
    data,
    result_message: '查询成功！',
    result: true
  };
};

module.exports = {
  getMenus
};