import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    trendingFeed: null,
    userFeed: null,
    userInfo: null,

    currentPage: 1,
    totalPages: null,
    pageSize: 10,

    slicedFeed: null,
  },
  getters: {
    getTrendingFeed(state) {
      return state.trendingFeed;
    },
    getUserFeed(state) {
      return state.userFeed;
    },
    getUserInfo(state) {
      return state.userInfo;
    },

    getCurrentPage(state) {
      return state.currentPage;
    },
    getTotalPages(state) {
      return state.totalPages;
    },
    getPageSize(state) {
      return state.pageSize;
    },

    getSlicedFeed(state) {
      return state.slicedFeed;
    },
  },
  mutations: {
    setTrendingFeed(state, value) {
      state.trendingFeed = value;
    },
    setUserFeed(state, value) {
      state.userFeed = value;
    },
    setUserInfo(state, value) {
      state.userInfo = value;
    },

    setCurrentPage(state, value) {
      state.currentPage = value;
    },

    setSlicedFeed(state, value) {
      state.slicedFeed = value;
    },
  },
  actions: {
    updatePage(context, value) {
      context.commit("setCurrentPage", value);

      const slicedValue = this.state.trendingFeed.slice(
        (this.state.currentPage - 1) * this.state.pageSize,
        (this.state.currentPage - 1) * this.state.pageSize + this.state.pageSize
      );

      context.commit("setSlicedFeed", slicedValue);
    },
    setTrendingFeed(context, value) {
      context.commit("setTrendingFeed", value);

      const slicedValue = this.state.trendingFeed.slice(
        (this.state.currentPage - 1) * this.state.pageSize,
        (this.state.currentPage - 1) * this.state.pageSize + this.state.pageSize
      );

      context.commit("setSlicedFeed", slicedValue);
    },
  },
  modules: {},
});
