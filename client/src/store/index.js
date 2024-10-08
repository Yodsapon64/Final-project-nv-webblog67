import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    token: null,
    ebooks: [],
  },
  mutations: {
    setUser(state, userData) {
      state.user = userData;
      state.token = userData ? userData.token : null; // ถ้ามี user จะตั้งค่า token
    },
    setEbooks(state, ebooks) {
      state.ebooks = ebooks;
    },
  },
  actions: {
    async login({ commit }, credentials) {
      const response = await axios.post('/api/auth/login', credentials);
      const userData = response.data;
      commit('setUser', userData);
      localStorage.setItem('token', userData.token);
    },
    async logout({ commit }) {
      commit('setUser', null);
      localStorage.removeItem('token');
    },
    async fetchAllEbooks({ commit }) {
      const response = await axios.get('/api/ebooks');
      commit('setEbooks', response.data);
    },
    async addEbook({ dispatch }, ebookData) {
      const token = localStorage.getItem('token');
      await axios.post('/api/ebooks', ebookData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch('fetchAllEbooks'); // โหลดรายการ Ebook ใหม่
    },
    async deleteEbook({ dispatch }, id) {
      const token = localStorage.getItem('token');
      await axios.delete(`/api/ebooks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch('fetchAllEbooks'); // โหลดรายการ Ebook ใหม่
    },
  },
});
