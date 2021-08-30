<template>
  <div class="bg-white rounded-sm">
    <template v-if="page && contentReady">
      <h1>
        {{ page.title }}
      </h1>
      <p
        class="page__content" 
        v-html="page.content"
      />
    </template>
    <template v-else>
      <Loader/>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import utils from '@/utils/utils';
import store from '@/store/store';

import Loader from '@/components/general/Loader';

export default {
  name: 'Page',
  components: {
    Loader
  },
  computed: {
    page: function () { 
      return store.getters.getPageBySlug(this.$route.params.slug)
    },
    ...mapState({
      contentReady: state => state.loaded.content
    })
  },
  methods: {
    loadPageContent: async function () {
      utils.get.content('pages', { slug: this.$route.params.slug })
        .then(res => utils.process.page(res))
        .catch(err => utils.err.throw(err));
    }
  },
  created() {
    if (!this.page) {
      this.loadPageContent();
    }
  },
  watch: {
    $route() {
      if (!this.page) {
        this.loadPageContent();
      }
    }
  }
}
</script>