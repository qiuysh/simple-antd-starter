const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const rootRoutes = require('./routes');
const tokenUtils = require('./utils/token');
const port = parseInt(process.env.PORT, 10) || 8854;

// 创建一个Koa对象表示web app本身
const server = new Koa();

server.use(tokenUtils.koaJwtUnless([
    /^(?!\/api)/,
    /^\/api\/v1\/login/,
  ]
));

server.use((ctx, next) => {     // 如果是携带了token的请求,解析这个token并 放置在ctx.authorization下
  return next().then(()=> {
    const authorization = ctx.header['authorization'];  // 获取jwt
    if (authorization) {
      let token = authorization.split(' ')[1]
      if(token && !tokenUtils.getTokenRenewStatus(token)){
        let newToken = tokenUtils.generateToken(token);
        console.log("newToken", newToken)
        //设置header
        ctx.set({
          authorization: newToken
        })
      }
    }
  }).catch((err) => {
    //携带token的Authorization参数错误
    throw err
  });
});

// 记录请求日志
// server.use(async (ctx, next) => {
//   ctx.res.statusCode = 200;
//   await next();
// });

// 应用解析请求体的中间件, koa-bodyparser 支持 json, form, text 类型的请求体
server.use(bodyParser());

server.use(logger());

// 添加路由
server.use(rootRoutes.routes(), rootRoutes.allowedMethods());

// 在端口port监听:
server.listen(port, () => {
  console.log('server is running at http://127.0.0.1:'+ port);
});
