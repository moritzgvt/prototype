import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: {
      content: null,
      status: false
    },
    general: {
      footer: null,
      logo: {
        image: null,
        title: null
      },
    },
    posts: {
      content: [],
      count: 0,
      total: 0
    },
    pages: [],
    error: null,
    loaded: {
      header: false,
      footer: false,
      content: false
    }
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts.content = [...state.posts.content, ...payload];
      state.posts.count = state.posts.count + payload.length;
    },
    setPostsTotal: (state, payload) => {
      state.posts.total = parseInt(payload);
    },
    setMenu: (state, payload) => {
      state.menu.content = payload;
    },
    setFooter: (state, payload) => {
      state.general.footer = payload;
    },
    setLogo: (state, payload) => {
      state.general.logo = payload;
    },
    setMenuStatus: (state, payload) => {
      state.menu.status = payload;
    },
    setPage: (state, payload) => {
      if (!state.pages.filter(page => page.slug == payload.slug)[0]) {
        state.pages = [...state.pages, ...payload];
      }
    },
    setError: (state, payload) => {
      state.error = payload;
    },
    headerLoaded: (state, payload) => {
      state.loaded.header = payload;
    },
    footerLoaded: (state, payload) => {
      state.loaded.footer = payload;
    },
    contentLoaded: (state, payload) => {
      state.loaded.content = payload;
    }
  },
  getters: {
    getPostById: (state) => (identifier) => {
      if (state.posts) {
        return state.posts.content.filter(post => post.id == identifier)[0];
      } else {
        throw new Error('No posts available.');
      }
    },
    getPageBySlug: (state) => (identifier) => {
      if (state.pages) {
        return state.pages.filter(page => page.slug == identifier)[0];
      } else {
        throw new Error('No pages available.');
      }
    },
    postsExist: (state) => () => {
      return state.posts.content.length
    }
  }
});
