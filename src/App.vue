<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import FooterBot from './components/FooterBot.vue';
  import Menu from './components/Menu.vue';
</script>

<template>
    <div id="content-app">
      <Menu/>  
      <RouterView />
    </div>

</template>



<style scoped lang="scss">

</style>
