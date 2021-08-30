import store from '../store/store'
import { map, err } from './utils'

const process = {
  posts: async (payload) => {
    try {
      const mappedPosts = map.posts(payload);
      await store.commit('setPosts', mappedPosts);
      await store.commit('contentLoaded', true);
    } catch (error) {
      err.throw(error);
    }
  },
  page: async (payload) => {
    try {
      const mappedPage = map.page(payload);
      await store.commit('setPage', mappedPage);
      await store.commit('contentLoaded', true);
    } catch (error) {
      err.throw(error);
    }
  },
  menu: async (payload) => {
    try {
      const mappedMenu = map.menu(payload);
      await store.commit('setMenu', mappedMenu);
      await store.commit('headerLoaded', true);
    } catch (error) {
      err.throw(error);
    }
  },
  generalInformation: async (payload) => {
    try {
      const mappedLogo = map.logo(payload);
      const mappedFooter = map.footer(payload);
      await store.commit('setLogo', mappedLogo);
      await store.commit('setFooter', mappedFooter);
      await store.commit('footerLoaded', true);
    } catch (error) {
      err.throw('General Information: ' + error);
    }
  }
}

export default process;