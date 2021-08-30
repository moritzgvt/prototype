<template>
  <header class="sticky top-0 bg-white border-b border-gray-200 z-40">

    <!-- Wrapper -->
    <div class="relative max-w-7xl content sm:px-8 sm:flex sm:flex-row sm:justify-between">

      <!-- Logo -->
      <div class="relative w-full flex flex-row justify-between">
        <router-link to="/" class="align-middle">
          <img v-if="logo.image" class="h-10 px-4 mx-0" :src="logo.image" :alt="logo.title">
          <span v-else class="inline-block nav-height px-4 font-normal text-gray-900">{{ logo.title }}</span>
        </router-link>
        <span @click="toggleMenu()" class="inline-block nav-height px-4 text-gray-900 cursor-pointer sm:hidden material-icons">
          menu
        </span>
      </div>

      <!-- Navigation -->
      <nav class="flex flex-row top-0 sm:relative">
        <div 
          @click="closeMenu()"
          class="fixed w-full h-screen bg-highlight-900 bg-opacity-80 transition-all duration-200 sm:hidden"
          :class="{
            'opacity-100 visible' : isMenuOpen, 
            'opacity-0 hidden' : !isMenuOpen
          }"
        />
        <ul 
          class="fixed flex flex-col w-3/4 py-2 px-4 sm:py-0 bg-gray-200 transform transition-all duration-150 sm:relative sm:opacity-100 sm:scale-y-100 sm:flex-row sm:justify-between sm:border-0 sm:bg-transparent sm:translate-x-0 sm:right-0 sm:left-auto"
          :class="{
            'opacity-100 translate-x-0 left-0 content-height' : isMenuOpen,
            'opacity-0 -translate-x-full -left-full' : !isMenuOpen
          }"
        >
          <li v-for="item in menu" :key="'menu-item-' + item.id" class="w-full inline-block transition text-gray-500 py-1 sm:py-0 sm:px-3 sm:h-full sm:w-auto hover:text-black">
            <router-link :to="item.path" class="inline-block nav-height w-full sm:w-auto whitespace-nowrap">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    logo: Object,
    menu: Array
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu: function () {
      this.isMenuOpen = !this.isMenuOpen;
      
      if (this.isMenuOpen) {
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
      }
    },
    closeMenu: function () {
      this.isMenuOpen = false;
      document.body.classList.remove('menu-open');
    },
    openMenu: function () {
      this.isMenuOpen = true;
      document.body.classList.add('menu-open');
    }
  },
  watch: {
    $route: function () {
      this.isMenuOpen = false;
      document.body.classList.remove('menu-open');
    }
  }
};
</script>