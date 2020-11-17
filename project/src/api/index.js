import { get } from '../utils/request.js';
// 在组件中可以直接 this.postLogin(传递参数).then()调用

const install = function (Vue) {
    // 登录
    Vue.prototype.getLogin = function (body) {
        return get('do4A/a1/Token', body)
    },
        // 共享格式
        Vue.prototype.BigScreenFormatClassify = function (body) {
            return get('doCatalog/Cataloga1_S_BigScreenFormatClassify', body)
        },
        // 共享类型
        Vue.prototype.BigScreenShareWayType = function (body) {
            return get('doCatalog/Cataloga1_S_BigScreenShareWayType', body)
        },
        // 共享方式
        Vue.prototype.BigScreenSharePropertyType = function (body) {
            return get('doCatalog/Cataloga1_S_BigScreenSharePropertyType', body)
        },
        // 目录向社会开放情况
        Vue.prototype.BigScreenOpenPropertyIs = function (body) {
            return get('doCatalog/Cataloga1_S_BigScreenOpenPropertyIs', body)
        },
        // 近一年新增图谱
        Vue.prototype.BigScreenDicRecordOneYear = function (body) {
            return get('doCatalog/Cataloga1_S_BigScreenDicRecordOneYear', body)
        },
        // 头部信息统计接口 && 共享类型  &&  接入共享类型占比
        Vue.prototype.BigScreenDicRecord = function (body) {
            return get('doCatalog/Cataloga1_S_BigScreenDicRecord', body)
        },
        // 目录更新频率
        Vue.prototype.BigScreenDicRecordUpdateNum = function (body) {
            return get('doCatalog/Cataloga1_S_BigScreenDicRecordUpdateNum', body)
        },
        // 部门目录排行榜（TOP10）&& 项接入目录数量部门排行（TOP10）&& 接入目录数量统计
        Vue.prototype.BigScreenDicRecordTop10 = function (body) {
            return get('doCatalog/Cataloga1_S_BigScreenDicRecordTop10', body)
        },
        //被订阅得目录总个数  && 被订阅得目录总次数 &&  目录订阅情况
        Vue.prototype.BigScreenSubscribe = function (body) {
            return get('doCatalog/Cataloga1_S_BigScreenSubscribe', body)
        },
        //地图 目录区域分布
        Vue.prototype.BigScreenDicRecordArea = function (body) {
            return get('doCatalog/Cataloga1_S_BigScreenDicRecordArea', body)
        }
}

export default install;