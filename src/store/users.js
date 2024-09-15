import axios from 'axios';

export default {
  namespaced: true,
  state: {
    userDetails: {},
    userPosts: [],
    loading: false,
    error: null,
  },
  mutations: {
    SET_USER_DETAILS(state, details) {
      state.userDetails = details;
    },
    SET_USER_POSTS(state, posts) {
      state.userPosts = posts;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },
  actions: {
    async fetchUserDetails({ commit }, userId) {
      commit('SET_LOADING', true);
      try {
        const { data: userDetails } = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        const { data: userPosts } = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        commit('SET_USER_DETAILS', userDetails);
        commit('SET_USER_POSTS', userPosts);
      } catch (error) {
        commit('SET_ERROR', error);
      } finally {
        commit('SET_LOADING', false);
      }
    },
  }, 
  getters: {
    getUserData(state) {
      return state.userDetails
    }
  }
};
