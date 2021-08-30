<template>
  <article 
    class="relative mb-2 sm:mb-8 bg-white transition-all overflow-hidden rounded-sm bg-gradient-to-r from-highlight-700 to-highlight-900 hover:shadow-lg"
  >
    <img v-if="post.image" class="relative w-full pointer-events-none" :src="post.image.sizes.large" :alt="post.image.title">
    <div :class="{'absolute' : post.image}" class="top-0 h-full w-full bg-gray-900 opacity-70"/>
    <div :class="{'absolute' : post.image}" class="w-full bottom-0 p-5 text-gray-50">
      <h1 class="m-0 pl-2" v-html="post.title"/>
      <h1 v-if="!post.image" class="m-0 pl-2 opacity-60" v-html="post.excerpt"/>
    </div>
    <router-link 
      class="absolute block top-0 w-full h-full cursor-pointer" 
      :to="'/post/' + post.id"
    />
  </article>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    post: Object
  }
}
</script>