<script>
export default {
  name: 'navBarSingle',
  data() {
    return {
      isMenuVisible: false, // Menu visibility state
      
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible; // Toggle the menu
    },
  },
};
</script>

<template>
  <header class="relative">
    <div class="h-[200px] bg-white bg-center">
      <div class="absolute inset-0 bg-grey bg-opacity-50"></div>
      <nav class="absolute top-10 left-1/2 transform -translate-x-1/2 w-[90%] flex items-center justify-between px-6 py-4 bg-white bg-opacity-50 rounded-xl">
        <a href="#" class="text-2xl sm:text-3xl font-bold text-violet-900">rendezvous</a>

        
        <button
          @click="toggleMenu"
          id="menu-toggle"
          class="block lg:hidden text-violet-900 focus:outline-none"
        >
          <i class="fas fa-bars text-2xl"></i>
        </button>

        <ul
          id="menu"
          :class="{'hidden': !isMenuVisible, 'block': isMenuVisible}"
          class="hidden lg:flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 mt-4 lg:mt-0 text-white font-medium"
        >
          <li><a href="#" class="text-violet-900 hover:text-purple-300">Discover</a></li>
          <li><a href="#" class="text-violet-900 hover:text-purple-300">About us</a></li>
          <li><a href="#" class="text-violet-900 hover:text-purple-300">FAQs</a></li>
          <li><a href="#" class="text-violet-900 hover:text-purple-300">Contact us</a></li>
        </ul>

        <div class="hidden lg:flex items-center space-x-4">
          <a href="#" class="text-violet-900 hover:text-purple-300">Log in</a>
          <a href="#" class="px-5 py-2 bg-violet-900 text-white rounded-lg hover:bg-purple-700">Sign up</a>
        </div>
      </nav>
    </div>
  </header>
</template>
