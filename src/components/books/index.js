/**
 * Created by qiuyishu on 16/12/11.
 */
const Index = {
    path: 'books', // 登录路由
    getComponents(location, callback) {
        require.ensure([], function (require) {
            callback(null, require('./books').default)
        })
    }
}
export default Index;