// 一些全局的config配置
const modeUrlObj = {
    // 生产环境
    'production': {
        baseURL: 'http://47.104.218.120/catalog/',
        // baseURL: 'http://59.197.18.163/catalog/',
        authBaseURL: ''
    },
    // 开发环境
    'development': {
        baseURL: 'http://47.104.218.120/catalog/',
        // baseURL: 'http://59.197.18.163/catalog/',
        authBaseURL: ''
    },
    // 测试环境
    // 'test': {
    //     baseURL: 'http://47.104.218.120/catalog/',
    //     baseURL: 'http://59.197.18.163/catalog/',
    //     authBaseURL: ''
    // }
}
export default modeUrlObj[process.env.NODE_ENV]