import testApi from '@/service/test.service'

const initState = {
    formBean: {}
}

const actions = {
    async query({ commit }) {
        await testApi.list()
        commit('query')
    }
}

const mutations = {
    query(state, payload) {
        state.formBean = payload
    }
}

const getters = {}

export default {
    namespced: true,
    state: initState,
    actions,
    mutations,
    getters
}
