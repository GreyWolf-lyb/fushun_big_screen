/*
 * @Author: your name
 * @Date: 2020-09-18 19:28:04
 * @LastEditTime: 2020-09-18 22:16:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VisualScreen\src\utils\request.js
 */
// 引用环境全局环境
import config from '../config/index.js';
import axios from 'axios'
import { getToken } from './storage.js'
// 创建axios请求实例
const request = axios.create({
    baseURL: config.baseURL, // 设置跨域代理接口统一的前置地址
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 设置请求头
    config.headers.Authorization = 'bearer ' + getToken();
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    // 只返回数据
    return response.data
}, function (error) {
    const status = error.response.status
    if (status >= 500) {
        // console.log(error.response.data.error, '服务繁忙请稍后再试')
        alert(error.response.data.error)
    } else if (status >= 400) {
        console.log(error.response.data.message)
    }
    // 对响应错误做点什么
    console.dir(error)
    return Promise.reject(error)
})

const get = (url, data) => request.get(url, {
    params: data
})
const post = (url, data) => request.post(url, data)
const DELETE = (url, data) => request.delete(url, data)
const head = (url, data) => request.head(url, data)
const options = (url, data) => request.options(url, data)
const put = (url, data) => request.put(url, data)
const patch = (url, data) => request.patch(url, data)

export {
    get,
    post,
    DELETE,
    put,
    head,
    options,
    patch
}