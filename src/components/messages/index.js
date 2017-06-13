/**
 * Created by qiuyishu on 16/12/11.
 */
const Index = {
    path: 'message', // 登录路由
    getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
            cb(null, require('./messages').default)
        })
    }
}
export default Index;