const state = {
  nav_active_index: 0
};

const mutations = {};

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
