<template>
  <div>
    <template v-if="posts && contentReady">
      <PostItem v-for="post in posts" :key="post.id" :post="post"/>
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

import PostItem from '@/components/home/PostItem'
import Loader from '@/components/general/Loader'

export default {
  name: 'Home',
  components: {
    PostItem,
    Loader
  },
  computed: mapState({
    posts: state => state.posts.content,
    contentReady: state => state.loaded.content
  }),
  created() {
    if (!store.state.posts.content.length) {
      utils.get.content('posts')
        .then(res => utils.process.posts(res))
        .catch(err => utils.err.throw(err));
    }
  }
};
</script>
