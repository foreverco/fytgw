const state = {
  nav_active_index: 0
};

const mutations = {
  getNavIndex(state, index) {
    state.nav_active_index = index;
  }
};

const actions = {
  getNavIndexAsync({ commit }, index) {
    commit("getNavIndex", index);
  }
};

export default {
  state,
  mutations,
  actions
};
