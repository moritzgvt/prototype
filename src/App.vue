<template>
    <div v-if="headerReady" id="app" class="font-sans">
      <Header :logo="logo" :menu="menu"/>
      
      <Main/>

      <Footer v-if="footerReady && contentReady" :data="footer"/>
    </div>
    <div
      v-else
      id="app" class="font-sans"
    >
      <Loader/>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import utils from '@/utils/utils';

import Header from '@/components/general/Header';
import Main from '@/components/general/Main';
import Footer from '@/components/general/Footer';
import Loader from '@/components/general/Loader';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
    Loader
  },
  computed: mapState({
    logo: state => state.general.logo,
    footer: state => state.general.footer,
    menu: state => state.menu.content,
    headerReady: state => state.loaded.header,
    footerReady: state => state.loaded.footer,
    contentReady: state => state.loaded.content
  }),
  methods: {
    loadSiteInformation: function () {
      utils.get.content('options', { api: 'acf' })
        .then(res => utils.process.generalInformation(res))
        .catch(err => utils.err.throw(err));
    },
    loadMenu: function () {
      utils.get.content('menu', { api: 'custom' })
        .then(res => utils.process.menu(res))
        .catch(err => utils.err.throw(err));
    }
  },
  created() {
    if (!this.footerReady && !this.headerReady) {
      this.loadSiteInformation();
      this.loadMenu();
    }
  },
}
</script>
