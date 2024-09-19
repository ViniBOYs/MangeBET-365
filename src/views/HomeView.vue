<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter();


</script>

<template>
  <div> <!-- class="flex flex-row align-itens-center justify-content-evenly" -->
    <img src="/RobertoBET.png" alt="RobertoBet">
  </div>
</template>

<style scoped lang="scss">

h1{
    font-size: 5rem;
    width: 25rem;
    text-align: center;
  }
  img{
    width: 100vw; 
    height: 65vh; 
    object-fit: cover;
    object-position: 10% 70%; 
}
</style>
