import Cookies from 'js-cookie'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  Mini: false,
  device: 'desktop',
  size: Cookies.get('size') || 'medium'
}

const mutations = {
    TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    state.Mini = !state.Mini
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
}
const actions = {
    toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
}

export default {
  state,
  mutations,
  actions
}
