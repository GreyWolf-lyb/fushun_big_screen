// 常用本地存储方法
import Cookies from 'js-cookie'
const TokenKey = 'Authorization'

/*
 * 设置setLocalStorage
 * */
export function setLocalStorage(key, value) {
    window.localStorage.setItem(key, window.JSON.stringify(value))
}
/*
 * 获取getLocalStorage
 * */
export function getLocalStorage(key) {
    return window.JSON.parse(window.localStorage.getItem(key) || '[]')
}
/*
 * 设置setSessionStorage
 * */
export function setSessionStorage(key, value) {
    window.sessionStorage.setItem(key, window.JSON.stringify(value))
}
/*
 * 获取getSessionStorage
 * */
export function getSessionStorage(key) {
    return window.JSON.parse(window.sessionStorage.getItem(key) || '[]')
}
/*
 * 获取getToken
 * */
export function getToken() {
    return Cookies.get(TokenKey)
}
/*
 * 设置setToken
 * */
export function setToken(token) {
    return Cookies.set(TokenKey, token)
}
/*
 * 移除removeToken
 * */
export function removeToken() {
    return Cookies.remove(TokenKey)
}
// 设置echarts字体
export function fontSize(res) {
    let docEl = document.documentElement,
        clientWidth =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
    if (!clientWidth) return;
    let fontSize = 100 * (clientWidth / 1920);
    return res * fontSize;
}