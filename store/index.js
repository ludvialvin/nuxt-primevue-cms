const state = () => ({
    listBreadcrumb: [
        {label: 'Dashboard', to: '/'},
    ]
})

const getters = {
    isAuthenticated(state) {
        return state.auth.loggedIn
    },

    loggedInUser(state) {
        return state.auth.user
    }
}

const actions = {

}

const mutations = {
    addBreadcrumb(state, data) {
        state.listBreadcrumb.push(data)
    },
    removeBreadcrumb(state) {
        state.listBreadcrumb = []
    },
}

export default{
    state,
    getters,
    actions,
    mutations
}
