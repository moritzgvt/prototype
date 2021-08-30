<template>
  <div class="bg-white rounded-sm">
    <template v-if="post && contentReady">
      <h1>{{ post.title }}</h1>
      <p class="page__content" v-html="post.content"/>
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
  name: 'Post',
  components: {
    Loader
  },
  computed: {
    post: function () {
      return store.getters.getPostById(this.$route.params.id);
    },
    ...mapState({
      contentReady: state => state.loaded.content
    })
  },
  mounted() {
    if (!store.state.posts.content.length) {
      utils.get.content('posts')
        .then(res => utils.process.posts(res))
        .catch(err => utils.err.throw(err));
    }
  }
}
</script>