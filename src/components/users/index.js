/**
 * Created by qiuyishu on 16/12/11.
 */
const Index = {

    path: 'users', // 登录路由
    getComponents(location, callback) {
        require.ensure([], function (require) {
            callback(null, require('./users').default)
        })
    }
}
export default Index;