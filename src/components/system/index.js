/**
 * Created by qiuyishu on 16/12/11.
 */
const Index = {
    path: 'system', // 登录路由
    getComponents(location, callback) {
        require.ensure([], function (require) {
            callback(null, require('./system').default)
        })
    }
}
export default Index;