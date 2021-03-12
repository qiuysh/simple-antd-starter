const router = require('koa-router')();
const commonController = require('../controllers/common');
const userController = require('../controllers/user');
const loginController = require('../controllers/login');
const dashboardController = require('../controllers/dashboard');

/* 公共模块 */
router.get('/api/v1/menu/list', commonController.getMenus);

/* 登录退出模块 */
router.post('/api/v1/login', loginController.login);
router.get('/api/v1/logout', loginController.logout);

/* 用户模块 */
router.post('/api/v1/findUserByPage', userController.findUserByPage);
router.get('/api/v1/table/list', userController.findUserByPage);

/* 仪表盘 */
router.get('/api/v1/dashboard/list', dashboardController.findUserByPage);

module.exports = router;