
<script>
import navBar from './components/head.vue';
import Foot from './components/footer.vue';

export default {
  name: 'App',
  components: {
    navBar,
    Foot,
  },
};
</script>

<template>

<div id="app">
   
   
    <RouterView />
    
   
    <Foot />
  </div>
</template>

<style scoped>
</style>
