import { get } from '@/utils/request.js';
import { setToken, getToken } from "@/utils/storage.js";
const user = {
    namespaced: true,
    state: {
        token: getToken() || ""
    },
    mutations: {
        increment(state, data) {
            state.token = data
        }
    },
    actions: {
        login({ commit }, payload) {
            return get('do4A/a1/Token', payload).then(res => {
                commit('increment', res.accessToken)
                setToken(res.accessToken);
                return Promise.resolve(res)
            })
        },
    }
}

export default user;